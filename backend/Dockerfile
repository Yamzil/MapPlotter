FROM python:3.9-buster

WORKDIR /usr/src/app

# Install system dependencies
RUN apt-get update --fix-missing && \
    apt-get install -y --no-install-recommends && \
    apt-get install -y --fix-missing && \
    apt-get install -y libpython3.7-dev && \
    rm -rf /var/lib/apt/lists/*


# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Upgrade pip
RUN pip install --upgrade pip

# Copy requirements and install them
COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

# Copy entrypoint script and project files
COPY ./entrypoint.sh /usr/src/app/entrypoint
