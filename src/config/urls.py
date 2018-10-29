from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# GraphQL
from graphene_django.views import GraphQLView
from .schema import schema

from django.contrib import admin
from .views import angular

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^graphql', GraphQLView.as_view(graphiql=True, schema=schema)),
    url(r'^api/v1/', include('api.urls')),
    url(r'^article/', include('articles.urls')),
    url(r'^accounts/', include('accounts.urls')),
    url(r'^angular-app/', angular, name="angular-app"),
]  

# Static Files
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
    urlpatterns += staticfiles_urlpatterns()
else:
    ## Not Working ##
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Media Files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
