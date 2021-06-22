from django.contrib import admin
from .models import Product, Category, Sub_Collection, Collection

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'price', 'image', 'stock', 'sub_collections', 'category')

@admin.register(Sub_Collection)
class Sub_CollectionAdmin(admin.ModelAdmin):
    list_display = ("Sub_Collections_name" ,)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("category_name" ,)

@admin.register(Collection)
class CollectionAdmin(admin.ModelAdmin):
    list_display = ("collections_name" ,)


