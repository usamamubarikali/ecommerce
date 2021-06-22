from rest_framework import serializers
from .models import Product, Category, Sub_Collection, Collection

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = "__all__"

class SubCollectionSerializer(serializers.ModelSerializer):
    Collections = CollectionSerializer(read_only=True)
    class Meta:
        model = Sub_Collection
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    sub_collections = SubCollectionSerializer(read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'product_name', 'price', 'image', 'stock', 'sub_collections', 'category']
