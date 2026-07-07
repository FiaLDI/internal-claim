from fastapi import Depends, HTTPException, Request

from src.domain.users.enums import Role
from src.infrastructure.security.jwt import decode_token


def get_current_user(request: Request):
    token = request.cookies.get("access_token")

    if token is None:
        raise HTTPException(401, "Unauthorized")

    try:
        payload = decode_token(token)
    except Exception:
        raise HTTPException(401, "Invalid token")

    return payload


def require_role(*roles: Role):
    def dependency(user=Depends(get_current_user)):
        if user["role"] not in [role.value for role in roles]:
            raise HTTPException(
                status_code=403,
                detail="Forbidden",
            )

        return user

    return dependency
