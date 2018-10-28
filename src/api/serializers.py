from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField,
    ValidationError,
)

from django_elasticsearch_dsl_drf.serializers import DocumentSerializer

from .documents import (
    ArticleDocument
)

from django.contrib.auth.models import User
from articles.models import Article

class UserSerializer(ModelSerializer):
    
    class Meta:
        model = User
        fields = (
            'id',
            'last_login',
            'is_superuser',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active',
            'date_joined',
        )

class ArticleSerializer(ModelSerializer):
    author = SerializerMethodField()
    author_url = HyperlinkedIdentityField(
        view_name="api:user-detail-view",
        lookup_field="id",
    )
    class Meta:
        model = Article
        fields = (
            'id',
            'slug',
            'title',
            'body',
            'date',
            'thumbnail',
            'author',
            'author_url',
        )
    
    def get_author(self, obj):
        return str(obj.author.username)


class ArticleDocumentSerializer(DocumentSerializer):
    
    class Meta:
        document = ArticleDocument
        field = (
            'id',
            'slug',
            'title',
            'body',
            'date'
        )
