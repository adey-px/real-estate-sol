from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

# Create urls for apps, first is site admin login url
urlpatterns = [
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Customise site admin header and title
admin.site.site_header = "Real Estate Admin"
admin.site.site_title = "Real Estate Admin Portal"
admin.site.index_title = "Welcome to the Real Estate Portal"