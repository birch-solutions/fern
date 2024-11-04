from pydantic import BaseModel
from resources.v_2.resources.problem.types import NonVoidFunctionSignature


class GetBasicSolutionFileRequest(BaseModel):
    method_name: str
    signature: NonVoidFunctionSignature
