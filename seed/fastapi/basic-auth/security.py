# This file was auto-generated by Fern from our API Definition.

import fastapi

ApiAuth = fastapi.security.HTTPBasicCredentials


def FernAuth(
    auth: fastapi.security.HTTPBasicCredentials = fastapi.security.HTTPBasic(),
) -> fastapi.security.HTTPBasicCredentials:
    return auth
