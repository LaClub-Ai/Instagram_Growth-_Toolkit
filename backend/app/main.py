from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .routes import auth, instagram, analytics
from .core.database import SessionLocal, engine
from .models.base import Base

# ایجاد جداول دیتابیس در صورت عدم وجود
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Instagram Growth API",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc"
)

# تنظیمات CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency برای دریافت سشن دیتابیس
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# اضافه کردن روترها
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(instagram.router, prefix="/api/instagram", tags=["Instagram"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["Analytics"])

# health check endpoint
@app.get("/api/health", tags=["Health"])
async def health_check():
    return {"status": "healthy"}