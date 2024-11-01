from django.urls import path
from .views import interval_divisible_view

urlpatterns = [
    path('get_divisible/', interval_divisible_view, name='interval_divisible_view'),
]
