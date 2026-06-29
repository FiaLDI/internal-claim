from fastapi import Depends, HTTPException, Request

from src.service.jwt import decode_token


def get_current_user(request: Request):
    token = request.cookies.get("access_token")

    if token is None:
        raise HTTPException(401, "Unauthorized")

    try:
        payload = decode_token(token)
    except Exception:
        raise HTTPException(401, "Invalid token")

    return payload