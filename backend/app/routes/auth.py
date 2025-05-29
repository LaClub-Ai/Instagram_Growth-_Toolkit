from fastapi import APIRouter

router = APIRouter(prefix="/auth", tags=["auth"])

@router.get("/test")
async def auth_test():
    return {"message": "Auth route is working"}