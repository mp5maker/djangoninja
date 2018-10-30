from django.http import HttpResponse
from django.shortcuts import render

def angular(request):
    return render(request, 'landing/index.html', {})

def react(request):
    return render(request, 'react-index.html', {})