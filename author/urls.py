from django.contrib import admin
from django.urls import path, include, re_path
from .yasg import urlpatterns as doc_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("author_backend.api.urls")),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns += doc_urls
