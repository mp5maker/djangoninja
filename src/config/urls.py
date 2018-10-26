from django.conf.urls import url, include

from django.conf import settings
from django.conf.urls.static import static

from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.contrib import admin
from .views import landing

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include('api.urls')),
    url(r'^article/', include('articles.urls')),
    url(r'^accounts/', include('accounts.urls')),
    url(r'^$', landing),
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