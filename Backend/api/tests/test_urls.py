from django.test import SimpleTestCase
from django.urls import reverse, resolve
from ..views import ProductList

import pytest

class testUrls(SimpleTestCase):
    
    @pytest.mark.django_db
    def test_api_product_detail(self,client):
        url = reverse("single-product", kwargs={'pk':1})
        response=client.get(url)
        assert resolve(response).view_name == "single-product"
    @pytest.mark.django_db
    def test_api_products_list(self):
        url = reverse("products")
        assert resolve(url).view_name == "products"

