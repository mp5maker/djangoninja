from django.shortcuts import render
from .models import Article
from django.contrib.auth.decorators import login_required

def article_list(request, *args, **kwargs):
    context = {
        "articles": Article.objects.all().order_by('title')
    }
    return render(request, 'articles/article-list.html', context)


@login_required(login_url="accounts:login")
def article_details(request, slug, *args, **kwargs):
    context = {
        "article": Article.objects.get(slug=slug)
    }
    return render(request, 'articles/article-detail.html', context)


@login_required(login_url="accounts:login")
def article_create(request, *args, **kwargs):
    return render(request, 'articles/article-create.html', {})
