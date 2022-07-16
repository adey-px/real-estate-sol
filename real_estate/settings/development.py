from .base import *


# Configure smtp server by mailtrap
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = envr("EMAIL_HOST")
EMAIL_USE_TLS = True
EMAIL_PORT = envr("EMAIL_PORT")
EMAIL_HOST_USER = envr("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = envr("EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = "info@real-estate.com"
DOMAIN = envr("DOMAIN")
SITE_NAME = "Real Estate"


# Configure connection to postgre db
DATABASES = {
    "default": {
        "ENGINE": envr("PG_ENGINE"),
        "NAME": envr("POSTGRES_DB"),
        "USER": envr("POSTGRES_USER"),
        "PASSWORD": envr("POSTGRES_PASSWORD"),
        "HOST": envr("PG_HOST"),
        "PORT": envr("PG_PORT"),
    }
}
