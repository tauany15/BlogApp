from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializer import *

# Create your views here.

class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    
