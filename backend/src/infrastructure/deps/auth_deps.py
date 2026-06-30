from fastapi import Depends
from sqlalchemy.orm import Session

from src.application.auth.use_cases import (
    LoginUseCase,
    LogoutUseCase,
    MeUseCase,
)
from src.domain.users.repositories import UserRepository
from src.infrastructure.database.session.db import get_db
from src.infrastructure.repositories.user_repository import (
    SqlAlchemyUserRepository,
)

def get_auth_repository(
    db: Session = Depends(get_db),
) -> UserRepository:
    return SqlAlchemyUserRepository(db)


def get_login_use_case(
    repository: UserRepository = Depends(get_auth_repository),
):
    return LoginUseCase(repository)


def get_me_use_case():
    return MeUseCase()


def get_logout_use_case():
    return LogoutUseCase()
