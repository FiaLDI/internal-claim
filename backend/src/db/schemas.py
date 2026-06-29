from datetime import datetime
from enum import Enum

from pydantic import BaseModel, ConfigDict


class Status(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    CLOSED = "done"


class Priority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


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
