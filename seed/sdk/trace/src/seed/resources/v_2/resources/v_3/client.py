# This file was auto-generated by Fern from our API Definition.

from .....core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .resources.problem.client import AsyncProblemClient, ProblemClient


class V3Client:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.problem = ProblemClient(client_wrapper=self._client_wrapper)


class AsyncV3Client:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.problem = AsyncProblemClient(client_wrapper=self._client_wrapper)
