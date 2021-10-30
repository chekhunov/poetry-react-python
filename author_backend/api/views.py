from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from author_backend.api.serializers import PictureSerializer, CategorySerializer, VerseSerializer, ConsecratedSerializer
from author_backend.models import Category, Verse, Consecrated, Picture


class VerseViewSet(viewsets.ModelViewSet):
    queryset = Verse.objects.all().order_by('-date_add')
    serializer_class = VerseSerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly,)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ConsecratedViewSet(viewsets.ModelViewSet):
    queryset = Consecrated.objects.all()
    serializer_class = ConsecratedSerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly,)


class PictureViewSet(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
    pagination_class = None
    permission_classes = (IsAuthenticatedOrReadOnly,)
