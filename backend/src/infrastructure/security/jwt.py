from datetime import datetime, timedelta, timezone
from src.infrastructure.shared.config import settings

import jwt


def create_access_token(
    user_id: str,
    username: str,
    role: str,
) -> str:
    payload = {
        "sub": user_id,
        "username": username,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(days=settings.token_expire_days),
    }

    return jwt.encode(
        payload,
        settings.secret_key,
        algorithm=settings.jwt_algorithm,
    )


def decode_token(token: str):
    return jwt.decode(
        token,
        settings.secret_key,
        algorithms=[settings.jwt_algorithm],
    )
