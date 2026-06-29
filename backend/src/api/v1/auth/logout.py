from fastapi import APIRouter, Response

router = APIRouter()


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("access_token")
    return {"ok": True}