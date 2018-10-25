from django.shortcuts import render
from .models import Article

# Create your views here.
def article_list(request):
    context = {
        "articles": Article.objects.all().order_by('title')
    }
    return render(request, 'articles/article_list.html', context)