from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session

from src.db.db import get_db
from src.db.schemas import LoginSchema
from src.service.auth import authenticate_user
from src.service.jwt import create_access_token

router = APIRouter()


@router.post("/login")
def login(
    data: LoginSchema,
    response: Response,
    db: Session = Depends(get_db),
):
    user = authenticate_user(
        db,
        data.username,
        data.password,
    )

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
        secure=False,  # True при HTTPS
        samesite="lax",
        max_age=60 * 60 * 24 * 7,
    )

    return {
        "username": user.username,
        "role": user.role,
    }
