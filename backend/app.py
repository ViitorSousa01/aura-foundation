from fastapi import FastAPI
from routes import auth, assistant

app = FastAPI(title="Aura Backend")

# Registrar rotas
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(assistant.router, prefix="/assistant", tags=["Assistant"])

@app.get("/")
async def root():
    return {"message": "Welcome to Aura Backend!"}
