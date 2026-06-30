from sqlalchemy.orm import Session

from src.infrastructure.database.models.users import User
from src.infrastructure.security.hash import hash_password
from src.infrastructure.shared.config import settings


def create_default_admin(db: Session):
    admin = (
        db.query(User)
        .filter(User.username == settings.admin_username)
        .first()
    )

    if admin:
        return

    admin = User(
        username=settings.admin_username,
        password_hash=hash_password(settings.admin_password),
        role=settings.admin_role,
    )

    db.add(admin)
    db.commit()
