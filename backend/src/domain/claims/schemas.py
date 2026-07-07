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


class ClaimsMetaResponse(BaseModel):
    limit: int | None
    offset: int | None
    total: int


class ClaimsResponse(BaseModel):
    data: list[ClaimResponse]
    meta: ClaimsMetaResponse


class ClaimItemResponse(BaseModel):
    data: ClaimResponse
