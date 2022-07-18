FROM python:3.10.5-slim-buster

# Set instructions for docker image creation
ENV APP_HOME=/app
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
WORKDIR $APP_HOME

# USe label to set data for docker image
LABEL developer = 'Oreofe Stephen'
LABEL website = "https://github.com/adey-px/adeyking.com"
LABEL decription = "Development image for Real Estate Project"

# Set environment variable-prevent python from writing .pyc file
ENV PYTHONDONTWRITEBYTECODE 1 

# Set environment variable-interprete python directly at terminal
ENV PYTHONUNBUFFERED 1

# Install dependencies with -y to prevent asking for user prompt
RUN apt-get update \
  && apt-get install -y build-essential \ 
  && apt-get install -y libpq-dev \
  && apt-get install -y gettext \
  && apt-get -y install netcat gcc postgresql \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

COPY ./requirements.txt /app/requirements.txt 

RUN pip install -r requirements.txt

COPY ./docker/local/django/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./docker/local/django/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

COPY ./docker/local/django/celery/worker/start /start-celeryworker
RUN sed -i 's/\r$//g' /start-celeryworker
RUN chmod +x /start-celeryworker

COPY ./docker/local/django/celery/flower/start /start-flower
RUN sed -i 's/\r$//g' /start-flower
RUN chmod +x /start-flower


ENTRYPOINT [ "/entrypoint"]
