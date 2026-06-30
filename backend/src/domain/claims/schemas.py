from datetime import datetime

from pydantic import BaseModel, ConfigDict

from src.domain.claims.enums import Priority, Status

class ClaimBase(BaseModel):
    title: str
    description: str
    status: Status
    priority: Priority


class ClaimCreate(ClaimBase):
    pass


class ClaimUpdate(ClaimBase):
    pass


class ClaimResponse(ClaimBase):
    model_config = ConfigDict(from_attributes=True)

    id: str
    created_at: datetime
    updated_at: datetime

class ClaimsResponse(BaseModel):
    data: list[ClaimResponse]


class ClaimItemResponse(BaseModel):
    data: ClaimResponse
