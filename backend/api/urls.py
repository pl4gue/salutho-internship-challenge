from django.urls import path
from .views import interval_lcm_view

urlpatterns = [
    path("interval_lcm/", interval_lcm_view, name="interval_lcm_view"),
]
