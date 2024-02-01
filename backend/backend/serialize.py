from rest_framework import serializers
from .models import MapModel

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapModel
        fields = '__all__'