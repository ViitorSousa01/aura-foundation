from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    prompt: str

@router.get("/")
async def assistant_info():
    return {"message": "Assistant API is ready"}

@router.post("/chat")
async def chat_with_assistant(request: ChatRequest):
    response = f"You said: {request.prompt}"
    return {"response": response}
