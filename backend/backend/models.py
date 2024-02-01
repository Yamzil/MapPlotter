from django.db import models

class MapModel(models.Model):
    data = models.JSONField()