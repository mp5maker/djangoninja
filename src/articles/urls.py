from django.conf.urls import url
from .views import (
    article_list,
    article_details,
    article_create,
)

app_name = 'articles'

urlpatterns = [
    url(r'^article-list/$', article_list, name='article-list'),
    url(r'^article-details/(?P<slug>[a-z-]+)$', article_details, name="article-details"),
    url(r'^article-create/$', article_create, name='article-create'),
]