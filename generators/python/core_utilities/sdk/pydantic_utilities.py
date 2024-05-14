import typing
import pydantic

IS_PYDANTIC_V2 = pydantic.VERSION.startswith("2.")

if IS_PYDANTIC_V2:
    import pydantic.v1 as pydantic_v1  # type: ignore  # nopycln: import
else:
    import pydantic as pydantic_v1  # type: ignore  # nopycln: import


def deep_union_pydantic_dicts(source: typing.Dict[str, typing.Any], destination: typing.Dict[str, typing.Any]) -> typing.Dict[str, typing.Any]:
    for key, value in source.items():
        if isinstance(value, dict):
            node = destination.setdefault(key, {})
            deep_union_pydantic_dicts(value, node)
        else:
            destination[key] = value

    return destination

__all__ = ["pydantic_v1"]
