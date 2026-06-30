from pydantic import BaseModel


class LoginSchema(BaseModel):
    username: str
    password: str


class UserSchema(BaseModel):
    username: str
    role: str