from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", lambda request: HttpResponse("Rythu-Mitra Backend Running Successfully 🚀")),
    path("auth/", include("authapp.urls")),
    path("farmers/", include("farmers.urls")),
    path("market/", include("market.urls")),
    path("transport/", include("transport.urls")),
    path("workers/", include("workers.urls")),
    path("ai/", include("ai.urls")),
]
