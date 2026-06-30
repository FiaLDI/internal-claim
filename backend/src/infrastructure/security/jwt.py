from datetime import datetime, timedelta, timezone
import jwt

from src.infrastructure.shared.config import settings


def create_access_token(user_id: str, username: str, role: str):
    payload = {
        "sub": user_id,
        "username": username,
        "role": role,
        "exp": datetime.now(timezone) + timedelta(days=settings.TOKEN_EXPIRE_DAYS),
    }

    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def decode_token(token: str):
    return jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
