from celery import Celery

celery = Celery(
    "worker",
    broker="redis://:yourpassword@redis:6379/0",  # مقدار را با مقدار واقعی جایگزین کنید یا از env بخوانید
    backend="redis://:yourpassword@redis:6379/0"
)