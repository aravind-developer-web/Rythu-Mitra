from rest_framework.decorators import api_view
from rest_framework.response import Response
from .disease_detection import detect_disease

@api_view(["GET"])
def test_api(request):
    return Response({"status": "Frontend Connected Successfully!"})

@api_view(["POST"])
def detect_leaf_disease(request):
    if "image" not in request.FILES:
        return Response({"error": "No image uploaded"}, status=400)

    img = request.FILES["image"]
    data = detect_disease(img)

    return Response(data)
