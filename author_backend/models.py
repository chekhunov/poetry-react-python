from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=250, verbose_name="Найменование категории")
    slug = models.SlugField(verbose_name="url")

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.title


class Consecrated(models.Model):
    title = models.CharField(max_length=200, verbose_name="Кому...")

    def __str__(self):
        return self.title


class Verse(models.Model):
    category = models.ForeignKey(Category, verbose_name="Категория стиха", on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name="Названия стиха")
    text = models.TextField(verbose_name="Текст стиха")
    consecrated = models.ForeignKey(Consecrated, verbose_name="Кому посвящається", on_delete=models.CASCADE)
    date_of_creation = models.CharField(max_length=50, verbose_name='Дата написания')
    date_add = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления стиха")
    publish = models.BooleanField(verbose_name="Опубликовать")
    slug = models.SlugField(verbose_name="url")

    class Meta:
        ordering = ('-date_add',)

    def __str__(self):
        return self.title


class Picture(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя фото")
    image = models.ImageField(upload_to="media")
    date_add = models.DateTimeField(verbose_name="Дата добавления фото")

    class Meta:
        ordering = ('-date_add',)

    def __str__(self):
        return self.image.url
