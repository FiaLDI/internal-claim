from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.db.db import Base, engine
from src.routers.claims import router as claims_router

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

app.include_router(claims_router)


@app.get("/")
def root():
    return {
        "status": "ok"
    }