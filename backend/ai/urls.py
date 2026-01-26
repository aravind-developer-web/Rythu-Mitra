from django.urls import path
from .views import detect_leaf_disease, test_api

urlpatterns = [
    path("detect/", detect_leaf_disease),
    path("test/", test_api),    # <-- required, do NOT delete this
]
