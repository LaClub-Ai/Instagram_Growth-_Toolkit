from fastapi import APIRouter, Body
from app.services.growth import smart_follow

router = APIRouter()

@router.post("/follow")
def follow_users(username: str = Body(...), password: str = Body(...), targets: list[str] = Body(...)):
    count = smart_follow(username, password, targets)
    return {"followed": count}