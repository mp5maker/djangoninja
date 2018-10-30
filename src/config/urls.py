from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# GraphQL
from graphene_django.views import GraphQLView
from .schema import schema

from django.contrib import admin
from .views import angular, react

urlpatterns = [
    # Admin
    url(r'^admin/', admin.site.urls),
    
    # GraphQL
    url(r'^graphql', GraphQLView.as_view(graphiql=True, schema=schema)),
    
    # Django Rest Framework
    url(r'^api/v1/', include('api.urls')),
    
    # Raw Django
    url(r'^article/', include('articles.urls')),
    url(r'^accounts/', include('accounts.urls')),
    
    # Angular App
    url(r'^angular-app/', angular, name="angular-app"),

    # React App
    url(r'^react-app/', react, name="react-app"),
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
