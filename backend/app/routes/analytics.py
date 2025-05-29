from fastapi import APIRouter

router = APIRouter(prefix="/analytics", tags=["analytics"])

@router.get("/test")
async def analytics_test():
    return {"message": "Analytics route is working"}