from functools import lru_cache
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict

from src.domain.users.enums import Role


class Settings(BaseSettings):
    app_name: str = "Claims API"
    debug: bool = False

    database_url: str

    secret_key: str
    jwt_algorithm: str = "HS256"
    token_expire_days: int = 7

    cookie_secure: bool = False
    cookie_samesite: Literal["lax", "strict", "none"] = "lax"

    backend_host: str = "0.0.0.0"
    backend_port: int = 8000

    cors_origins: list[str] = ["http://localhost:3000"]
    admin_username: str = "admin"
    admin_password: str = "admin"

    admin_role: Role = Role.ADMIN

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
