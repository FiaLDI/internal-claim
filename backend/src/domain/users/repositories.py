from typing import Protocol

from src.infrastructure.database.models.users import User


class UserRepository(Protocol):
    def authenticate_user(
        self,
        username: str,
        password: str,
    ) -> User | None: ...
