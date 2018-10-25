from django.conf.urls import url
from .views import article_list

app_name = 'articles'

urlpatterns = [
    url(r'^article-list/$', article_list, name='article-list')
]