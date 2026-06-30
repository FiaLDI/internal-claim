from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.infrastructure.database.seed.admin import create_default_admin
from src.infrastructure.database.seed.claims import create_demo_claims
from src.api.v1 import api_router
from src.infrastructure.database.session.db import (
    Base,
    SessionLocal,
    engine,
)
from src.infrastructure.shared.config import settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        create_default_admin(db)
        create_demo_claims(db)
    finally:
        db.close()

    yield


app = FastAPI(
    title=settings.app_name,
    lifespan=lifespan,
)

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
        "status": "ok",
    }