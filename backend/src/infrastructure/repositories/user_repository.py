from sqlalchemy.orm import Session

from src.infrastructure.security.hash import verify_password
from src.domain.users.repositories import UserRepository
from src.infrastructure.database.models.users import User


class SqlAlchemyUserRepository(UserRepository):
    def __init__(self, db: Session):
        self.db = db

    def authenticate_user(
        self,
        username: str,
        password: str,
    ) -> User | None:
        user = self.db.query(User).filter(User.username == username).first()

        if user is None:
            return None

        if not verify_password(password, user.password_hash):
            return None

        return user
