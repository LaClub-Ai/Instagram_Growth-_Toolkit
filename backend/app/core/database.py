import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Prefer environment variable, fallback to .env default if needed
SQLALCHEMY_DATABASE_URL = os.getenv(
    "DB_URL",
    "postgresql://app_admin:your_strong_password_123!@db:5432/instagram_prod"
)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True,
    pool_size=20,
    max_overflow=10
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()