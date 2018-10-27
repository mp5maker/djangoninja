from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import (
    ArticleCreateForm
)
from .models import Article
from .mixins import slugify_mixins

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
    if request.method == "POST":
        form = ArticleCreateForm(request.POST, request.FILES)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.author = request.user
            instance.slug = slugify_mixins(instance.title)
            instance.save()
            return redirect('articles:article-list')
    else:
        form = ArticleCreateForm()

    context = {
        "form": form
    }
    return render(request, 'articles/article-create.html', context)
