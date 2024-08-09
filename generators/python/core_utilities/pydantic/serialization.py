import collections
import typing

import typing_extensions


class FieldMetadata:
    """
    Metadata class used to annotate fields to provide additional information.

    Example:
    class MyDict(TypedDict):
        field: typing.Annotated[str, FieldMetadata(alias="field_name")]

    Will serialize: `{"field": "value"}`
    To: `{"field_name": "value"}`
    """

    alias: str

    def __init__(self, *, alias: str) -> None:
        self.alias = alias


def convert_and_respect_annotation_metadata(
    *,
    object_: typing.Any,
    annotation: typing.Any,
    inner_type: typing.Optional[typing.Any] = None,
) -> typing.Any:
    """
    Respect the metadata annotations on a field, such as aliasing. This function effectively
    manipulates the dict-form of an object to respect the metadata annotations. This is primarily used for
    TypedDicts, which cannot support aliasing out of the box, and can be extended for additional
    utilities, such as defaults.

    Parameters
    ----------
    object_ : typing.Any

    annotation : type
        The type we're looking to apply typing annotations from

    inner_type : typing.Optional[type]

    Returns
    -------
    typing.Any
    """

    if object_ is None:
        return None
    if inner_type is None:
        inner_type = annotation

    clean_type = _remove_annotations(inner_type)
    if typing_extensions.is_typeddict(clean_type) and isinstance(object_, typing.Mapping):
        return _convert_typeddict(object_, clean_type)

    if (
        # If you're iterating on a string, do not bother to coerce it to a sequence.
        (not isinstance(object_, str))
        and (
            (
                (
                    typing_extensions.get_origin(clean_type) == typing.List
                    or typing_extensions.get_origin(clean_type) == list
                    or clean_type == typing.List
                )
                and isinstance(object_, typing.List)
            )
            or (
                (
                    typing_extensions.get_origin(clean_type) == typing.Set
                    or typing_extensions.get_origin(clean_type) == set
                    or clean_type == typing.Set
                )
                and isinstance(object_, typing.Set)
            )
            or (
                (
                    typing_extensions.get_origin(clean_type) == typing.Sequence
                    or typing_extensions.get_origin(clean_type) == collections.abc.Sequence
                    or clean_type == typing.Sequence
                )
                and isinstance(object_, typing.Sequence)
            )
        )
    ):
        inner_type = typing_extensions.get_args(clean_type)[0]
        return [
            convert_and_respect_annotation_metadata(object_=item, annotation=annotation, inner_type=inner_type)
            for item in object_
        ]

    if typing_extensions.get_origin(clean_type) == typing.Union:
        # We should be able to ~relatively~ safely try to convert keys against all
        # member types in the union, the edge case here is if one member aliases a field
        # of the same name to a different name from another member
        # Or if another member aliases a field of the same name that another member does not.
        for member in typing_extensions.get_args(clean_type):
            object_ = convert_and_respect_annotation_metadata(object_=object_, annotation=annotation, inner_type=member)
        return object_

    annotated_type = _get_annotation(annotation)
    if annotated_type is None:
        return object_

    # If the object is not a TypedDict, a Union, or other container (list, set, sequence, etc.)
    # Then we can safely call it on the recursive conversion.
    return object_


def _convert_typeddict(object_: typing.Mapping[str, object], expected_type: typing.Any) -> typing.Mapping[str, object]:
    converted_object: typing.Dict[str, object] = {}
    annotations = typing_extensions.get_type_hints(expected_type, include_extras=True)
    for key, value in object_.items():
        type_ = annotations.get(key)
        if type_ is None:
            converted_object[key] = value
        else:
            converted_object[_alias_key(key, type_)] = convert_and_respect_annotation_metadata(
                object_=value, annotation=type_
            )
    return converted_object


def _get_annotation(type_: typing.Any) -> typing.Optional[typing.Any]:
    maybe_annotated_type = typing_extensions.get_origin(type_)
    if maybe_annotated_type is None:
        return None

    if maybe_annotated_type == typing_extensions.NotRequired:
        type_ = typing_extensions.get_args(type_)[0]
        maybe_annotated_type = typing_extensions.get_origin(type_)

    if maybe_annotated_type == typing_extensions.Annotated:
        return type_

    return None


def _remove_annotations(type_: typing.Any) -> typing.Any:
    maybe_annotated_type = typing_extensions.get_origin(type_)
    if maybe_annotated_type is None:
        return type_

    if maybe_annotated_type == typing_extensions.NotRequired:
        return _remove_annotations(typing_extensions.get_args(type_)[0])

    if maybe_annotated_type == typing_extensions.Annotated:
        return _remove_annotations(typing_extensions.get_args(type_)[0])

    return type_


def _alias_key(key: str, type_: typing.Any) -> str:
    maybe_annotated_type = _get_annotation(type_)

    if maybe_annotated_type is not None:
        # The actual annotations are 1 onward, the first is the annotated type
        annotations = typing_extensions.get_args(maybe_annotated_type)[1:]

        for annotation in annotations:
            if isinstance(annotation, FieldMetadata) and annotation.alias is not None:
                return annotation.alias

    return key
