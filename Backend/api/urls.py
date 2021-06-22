from django.urls import path, include
from .views import ProductList, ProductDetail

urlpatterns = [
    path('products/', ProductList.as_view(), name='products'),
    path('product/<int:pk>', ProductDetail.as_view(), name='single-product'),
]