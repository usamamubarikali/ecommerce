from django.db import models

class Collection(models.Model):
    collections_name = models.CharField(max_length=20)
    app_label = "Collections"
    def __str__(self):
        return self.collections_name

class Sub_Collection(models.Model):
    Sub_Collections_name = models.CharField(max_length=20)
    Collections = models.ForeignKey(Collection, default=1, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Sub Collections'
        verbose_name = 'Sub Collection'
    
    def __str__(self):
        return self.Sub_Collections_name

class Category(models.Model):
    category_name = models.CharField(max_length=10)
    class Meta:
        verbose_name_plural = 'categories'
    
    def __str__(self):
        return self.category_name

class Product(models.Model):
    product_name = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=8)
    image = models.ImageField()
    stock = models.IntegerField()
    sub_collections = models.ForeignKey(Sub_Collection, default=1, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, default=1, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name