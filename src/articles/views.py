from django.shortcuts import render
from .models import Article

# Create your views here.
def article_list(request, *args, **kwargs):
    context = {
        "articles": Article.objects.all().order_by('title')
    }
    return render(request, 'articles/article-list.html', context)

def article_details(request, slug, *args, **kwargs):
    context = {
        "article": Article.objects.get(slug=slug)
    }
    return render(request, 'articles/article-detail.html', context)