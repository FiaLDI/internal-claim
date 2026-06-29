from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.db.db import Base, engine

from src.api.v1 import api_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Claims API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")

@app.get("/")
def root():
    return {
        "status": "ok"
    }