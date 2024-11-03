.DEFAULT_GOAL := build

ifeq ($(OS), Windows_NT)
	RUNNING_ON := Windows
	ACTIVATE_VENV := .\.venv\Scripts\activate
else
	RUNNING_ON := Linux or Mac
	ACTIVATE_VENV := .venv/bin/activate
endif

VENV_DIR := .venv
BACKEND_REQUIREMENTS := backend/requirements.txt

.PHONY: clean
clean:
	@echo Cleaning up virtual environment and frontend distribution
	rm -rf $(VENV_DIR)
	cd frontend && npm run clean

.PHONY: build start_build build_backend build_frontend
start_build:
	@echo Building on $(RUNNING_ON)

build_backend:
	@echo Setting up backend virtual environment
	python -m venv $(VENV_DIR)
	@$(ACTIVATE_VENV) && python -m pip install -r $(BACKEND_REQUIREMENTS)

build_frontend:
	@echo Building frontend
	cd frontend && \
	npm install && \
	npm run build

build: start_build clean build_backend build_frontend

.PHONY: run start_run run_backend run_frontend run_servers
start_run:
	@echo "Running on $(RUNNING_ON)"

run_backend:
	@echo Starting backend server
	@$(ACTIVATE_VENV) && \
	python backend/manage.py runserver &

run_frontend:
	@echo Starting frontend server
	cd frontend && \
	npm start &

run_servers: run_backend run_frontend

run: start_run
	$(MAKE) run_servers -j2
