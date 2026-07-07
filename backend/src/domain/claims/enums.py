from enum import Enum


class Status(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    DONE = "done"


class Priority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
