from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MapModel
from .serialize import MapSerializer
from rest_framework.exceptions import ValidationError
from django.db.utils import IntegrityError
import logging

logger = logging.getLogger(__name__)

def generate_response(data, status_code):
    return Response({"data": data, "status_code": status_code})

class MapView(APIView):
    def post(self, request):
        try:
            serializer = MapSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return generate_response(serializer.data, status.HTTP_201_CREATED)
        except ValidationError as ve:
            return generate_response({"error": str(ve)}, status.HTTP_400_BAD_REQUEST)
        except IntegrityError as ie:
            return generate_response({"error": str(ie)}, status.HTTP_409_CONFLICT)
        except Exception as e:
            logger.error("An unexpected error occurred: %s", str(e))
            return generate_response({"error": "Internal Server Error"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def get(self, request):
        try:
            data = MapModel.objects.all()
            serializer = MapSerializer(data, many=True)
            return generate_response(serializer.data, status.HTTP_200_OK)
        except Exception as e:
            logger.error("An unexpected error occurred: %s", str(e))
            return generate_response({"error": "Internal Server Error"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
