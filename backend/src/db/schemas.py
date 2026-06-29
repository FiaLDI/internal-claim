from pydantic import BaseModel


class ClaimBase(BaseModel):
    title: str
    description: str | None = None
    status: str = "new"


class ClaimCreate(ClaimBase):
    pass


class ClaimUpdate(ClaimBase):
    pass


class ClaimResponse(ClaimBase):
    id: int

    class Config:
        from_attributes = True
        