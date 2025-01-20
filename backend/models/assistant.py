from pydantic import BaseModel

class AssistantResponse(BaseModel):
    response: str
    confidence: float
