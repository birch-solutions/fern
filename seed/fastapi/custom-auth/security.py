# This file was auto-generated by Fern from our API Definition.

import fastapi

ApiAuth = str


def FernAuth(auth: str = fastapi.Header(alias="X-API-KEY")) -> str:
    return auth
