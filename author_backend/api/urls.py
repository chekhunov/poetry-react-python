from django.urls import path, include
from rest_framework import routers
from author_backend.api import views


router = routers.DefaultRouter()
router.register(r'verse', views.VerseViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'consecrated', views.ConsecratedViewSet)
router.register(r'picture', views.PictureViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
