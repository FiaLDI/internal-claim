from fastapi import FastAPI

from src.db.db import Base, engine
from src.routers.claims import router as claims_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Claims API")

app.include_router(claims_router)


@app.get("/")
def root():
    return {
        "status": "ok"
    }