from src.application.auth.dto import LoginCommand
from src.domain.users.repositories import UserRepository


class LoginUseCase:

    def __init__(self, repository: UserRepository):
        self.repository = repository

    def execute(self, command: LoginCommand):
        return self.repository.authenticate_user(
            command.username,
            command.password,
        )


class MeUseCase:

    def execute(self, user):
        return {
            "username": user["username"],
            "role": user["role"],
        }


class LogoutUseCase:

    def execute(self):
        return {"ok": True}
    