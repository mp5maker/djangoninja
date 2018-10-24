from django.conf.urls import url, include
from django.contrib import admin
from .views import landing

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include('api.urls')),
    url(r'^$', landing),
]
