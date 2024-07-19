from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()

class DeletePost(models.Model):
    name = models.CharField(max_length=10)
