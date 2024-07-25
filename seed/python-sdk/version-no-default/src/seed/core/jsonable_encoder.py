# This file was auto-generated by Fern from our API Definition.

"""
jsonable_encoder converts a Python object to a JSON-friendly dict
(e.g. datetimes to strings, Pydantic models to dicts).

Taken from FastAPI, and made a bit simpler
https://github.com/tiangolo/fastapi/blob/master/fastapi/encoders.py
"""

import base64
import dataclasses
import datetime as dt
from enum import Enum
from pathlib import PurePath
from types import GeneratorType
from typing import Any, Callable, Dict, List, Optional, Set, Union

import pydantic
import typing_extensions

from .datetime_utils import serialize_datetime
from .pydantic_utilities import IS_PYDANTIC_V2, encode_by_type, get_args, get_origin, to_jsonable_with_fallback
from .serialization import FieldMetadata

SetIntStr = Set[Union[int, str]]
DictIntStrAny = Dict[Union[int, str], Any]


def jsonable_encoder(obj: Any, custom_encoder: Optional[Dict[Any, Callable[[Any], Any]]] = None) -> Any:
    custom_encoder = custom_encoder or {}
    if custom_encoder:
        if type(obj) in custom_encoder:
            return custom_encoder[type(obj)](obj)
        else:
            for encoder_type, encoder_instance in custom_encoder.items():
                if isinstance(obj, encoder_type):
                    return encoder_instance(obj)
    if isinstance(obj, pydantic.BaseModel):
        if IS_PYDANTIC_V2:
            encoder = getattr(obj.model_config, "json_encoders", {})  # type: ignore # Pydantic v2
        else:
            encoder = getattr(obj.__config__, "json_encoders", {})  # type: ignore # Pydantic v1
        if custom_encoder:
            encoder.update(custom_encoder)
        obj_dict = obj.dict(by_alias=True)
        if "__root__" in obj_dict:
            obj_dict = obj_dict["__root__"]
        if "root" in obj_dict:
            obj_dict = obj_dict["root"]
        return jsonable_encoder(obj_dict, custom_encoder=encoder)
    if dataclasses.is_dataclass(obj):
        obj_dict = dataclasses.asdict(obj)
        return jsonable_encoder(obj_dict, custom_encoder=custom_encoder)
    if isinstance(obj, bytes):
        return base64.b64encode(obj).decode("utf-8")
    if isinstance(obj, Enum):
        return obj.value
    if isinstance(obj, PurePath):
        return str(obj)
    if isinstance(obj, (str, int, float, type(None))):
        return obj
    if isinstance(obj, dt.datetime):
        return serialize_datetime(obj)
    if isinstance(obj, dt.date):
        return str(obj)
    if isinstance(obj, dict):
        encoded_dict = {}
        allowed_keys = set(obj.keys())
        for key, value in obj.items():
            if key in allowed_keys:
                key_type = get_origin(key)
                is_aliased_field = False
                if key_type is not None and key_type == typing_extensions.Annotated:
                    annotated_metadata = get_args(key_type)[1:]
                    for metadata in annotated_metadata:
                        if isinstance(metadata, FieldMetadata) and metadata.alias is not None:
                            encoded_key = metadata.alias
                            is_aliased_field = True
                if not is_aliased_field:
                    encoded_key = jsonable_encoder(key, custom_encoder=custom_encoder)
                encoded_value = jsonable_encoder(value, custom_encoder=custom_encoder)
                encoded_dict[encoded_key] = encoded_value
        return encoded_dict
    if isinstance(obj, (list, set, frozenset, GeneratorType, tuple)):
        encoded_list = []
        for item in obj:
            encoded_list.append(jsonable_encoder(item, custom_encoder=custom_encoder))
        return encoded_list

    def fallback_serializer(o: Any) -> Any:
        attempt_encode = encode_by_type(o)
        if attempt_encode is not None:
            return attempt_encode

        try:
            data = dict(o)
        except Exception as e:
            errors: List[Exception] = []
            errors.append(e)
            try:
                data = vars(o)
            except Exception as e:
                errors.append(e)
                raise ValueError(errors) from e
        return jsonable_encoder(data, custom_encoder=custom_encoder)

    return to_jsonable_with_fallback(obj, fallback_serializer)
