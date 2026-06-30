from fastapi import APIRouter, Depends, HTTPException, Response

from src.domain.users.schemas import LoginSchema
from src.application.auth.dto import LoginCommand
from src.application.auth.use_cases import LoginUseCase
from src.infrastructure.security.jwt import create_access_token
from src.infrastructure.deps.auth_deps import get_login_use_case
from src.infrastructure.shared.config import settings

router = APIRouter()


@router.post("/login")
def login(
    data: LoginSchema,
    response: Response,
    use_case: LoginUseCase = Depends(get_login_use_case),
):
    command = LoginCommand.from_schema(data)

    user = use_case.execute(command)

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="Неверный логин или пароль",
        )

    token = create_access_token(
        user.id,
        user.username,
        user.role,
    )

    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=settings.cookie_secure,
        samesite=settings.cookie_samesite,
        max_age=60 * 60 * 24 * settings.token_expire_days,
    )

    return {
        "username": user.username,
        "role": user.role,
    }