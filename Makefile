.PHONY: dev build serve stop down clean help

# Default target
.DEFAULT_GOAL := help

## dev: Start the development container with hot reloading (port 8000)
dev:
	docker compose up dev --build

## build: Build static files into ./public directory on host
build:
	docker compose run --rm build

## serve: Serve the compiled static site (port 9000)
serve:
	docker compose up serve --build

## stop: Stop running containers
stop:
	docker compose stop

## down: Tear down containers and networks
down:
	docker compose down

## clean: Stop containers and remove volumes
clean:
	docker compose down -v

## help: Show available Makefile targets
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Available targets:"
	@echo "  dev      Start development container (http://localhost:8000)"
	@echo "  build    Build static site into ./public"
	@echo "  serve    Serve built static site (http://localhost:9000)"
	@echo "  stop     Stop running containers"
	@echo "  down     Tear down containers"
	@echo "  clean    Tear down containers and remove volumes"
