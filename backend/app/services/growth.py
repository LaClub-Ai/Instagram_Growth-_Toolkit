from app.core.instagram_client import get_client
import random
import time

def smart_follow(username, password, targets, max_per_day=50):
    cl = get_client(username, password)
    followed = 0
    for target in targets:
        if followed >= max_per_day:
            break
        try:
            cl.user_follow(target)
            followed += 1
            time.sleep(random.randint(30, 120))  # رفتار انسانی
        except Exception as e:
            print(f"Error following {target}: {e}")
    return followed