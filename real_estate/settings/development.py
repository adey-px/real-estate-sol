from .base import *

DATABASES = {
    "default": {
        "ENGINE": envr("PG_ENGINE"),
        "NAME": envr("PG_NAME"),
        "USER": envr("PG_USER"),
        "PASSWORD": envr("PG_PASSWORD"),
        "HOST": envr("PG_HOST"),
        "PORT": envr("PG_PORT"),
    }
}
