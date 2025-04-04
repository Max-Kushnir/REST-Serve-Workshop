from pydantic import BaseModel
from enum import Enum
from datetime import datetime

class StatusEnum(str, Enum):
    submitted = "Submitted"
    in_review = "In-Review"
    assessment = "Online Assessment"
    interview = "Interview"
    offer = "Offer"
    other = "Other"

class PriorityEnum(str, Enum):
    low = "Low"
    mid = "Mid"
    high = "High"

class Application(BaseModel):
    id: int
    company: str
    job_title: str
    location: str
    application_link: str
    date_applied: datetime
    status: StatusEnum
    priority: PriorityEnum

class ApplicationCreate(BaseModel):
    company: str
    job_title: str
    location: str
    application_link: str
    status: StatusEnum
    priority: PriorityEnum
