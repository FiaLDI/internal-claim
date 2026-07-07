from dataclasses import dataclass

from src.domain.users.schemas import LoginSchema


@dataclass(slots=True)
class LoginCommand:
    username: str
    password: str

    @classmethod
    def from_schema(cls, schema: LoginSchema):
        return cls(
            username=schema.username,
            password=schema.password,
        )
