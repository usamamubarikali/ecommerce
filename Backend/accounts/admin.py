from django.contrib import admin
from .models import UserAccount

@admin.register(UserAccount)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'is_active', 'is_staff')
