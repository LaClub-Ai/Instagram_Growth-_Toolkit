from fastapi import APIRouter

router = APIRouter(prefix="/instagram", tags=["instagram"])

@router.get("/test")
async def instagram_test():
    return {"message": "Instagram route is working"}