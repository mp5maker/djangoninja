from django.conf.urls import url
from .views import (
    signup_view
)

app_name = 'accounts'

urlpatterns = [
    url(r'^signup/$', signup_view, name="signup")
]
