from rest_framework import serializers

from author_backend.models import Category, Verse, Consecrated, Picture


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title', 'slug']


class VerseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Verse
        fields = ['category', 'title', 'text', 'consecrated', 'date_of_creation', 'date_add', 'publish', 'slug']


class ConsecratedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consecrated
        fields = ['title']


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['image']
