from django.conf.urls import url, include

from rest_framework.routers import SimpleRouter

from .views import (
    UserListView,
    UserDetailView,
    ArticleListView,
    ArticleSearchView,
)

app_name = "api"

search_router = SimpleRouter()
search_router.register(
    r'article',
    ArticleSearchView,
    base_name="article-search-view"
)

urlpatterns = [
    url(r'rest-auth/', include('rest_auth.urls')),
    url(r'^search/', include(search_router.urls)),
    url(r'^user/$', UserListView.as_view(), name='user-list-view'),
    url(r'^user/(?P<id>[0-9]+)$', UserDetailView.as_view(), name='user-detail-view'),
    url(r'^article/$', ArticleListView.as_view(), name='article-list-view'),
]
