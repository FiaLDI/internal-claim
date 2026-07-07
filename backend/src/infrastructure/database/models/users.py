import uuid
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from src.infrastructure.database.session.db import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )

    username: Mapped[str] = mapped_column(unique=True)

    password_hash: Mapped[str]

    role: Mapped[str]
