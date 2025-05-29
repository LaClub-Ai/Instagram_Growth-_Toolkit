#!/bin/bash

# Environment setup
export COMPOSE_PROJECT_NAME=instagram_growth
export COMPOSE_FILE=docker-compose.prod.yml

# Build and deploy
docker-compose build --no-cache
docker-compose up -d --force-recreate

# Database migration
docker-compose exec backend alembic upgrade head

# Cleanup
docker system prune -f