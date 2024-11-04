from pydantic import BaseModel
from typing import List
from resources.v_2.resources.problem.types import Parameter
from resources.commons.types import VariableType


class NonVoidFunctionSignature(BaseModel):
    parameters: List[Parameter]
    return_type: VariableType
