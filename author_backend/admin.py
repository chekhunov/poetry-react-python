from django.contrib import admin

from author_backend.models import Category, Verse, Picture, Consecrated


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['title'], }


class VerseAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['title'], }


admin.site.register(Verse, VerseAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Picture)
admin.site.register(Consecrated)
