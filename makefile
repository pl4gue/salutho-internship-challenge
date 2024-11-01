ifeq ($(OS), Windows_NT)
	running_on := "Windows"
else
	running_on := "Linux or Mac"
endif

build_backend:
	python -m venv .venv
	@if [ "$(OS)" = "Windows_NT" ]; then \
		.\.venv\Scripts\activate && .\.venv\Scripts\python.exe -m pip install -r backend/requirements.txt; \
	else \
		. .venv/bin/activate && pip install -r backend/requirements.txt; \
	fi

#build_frontend:

start:
	$(info $(running_on))

build: start build_backend #build_frontend
