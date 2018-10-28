# Models
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from articles.models import Article

# Serializers
from .serializers import (
    UserSerializer,
    ArticleSerializer,
    ArticleDocumentSerializer,
)

# Api Views
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveUpdateDestroyAPIView,
    ValidationError,
)

# Authentication
from rest_framework.authentication import (
    SessionAuthentication, 
    BasicAuthentication,
    TokenAuthentication,
)

# Permisions
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

# Mixins
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)

# Filters
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter
)

from rest_framework.decorators import (
    action,
)
# Custom Pagination
from .paginations import (
   ApiLimitOffsetPagination,
   ApiPageNumberPagination,
)

# Custom Permission
from .permissions import IsOwnerOrReadOnly

# Elastic Search
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_RANGE,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    OrderingFilterBackend,
    DefaultOrderingFilterBackend,
    SearchFilterBackend,
)

# Elastic Search Document
from .documents import (
    ArticleDocument,
)

class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated, )
    pagination_class = ApiPageNumberPagination

class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated, )
    lookup_field = "id"

# @csrf_exempt
class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated, )
    pagination_class = ApiPageNumberPagination


class ArticleSearchView(DocumentViewSet):
    document = ArticleDocument
    serializer_class = ArticleDocumentSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated, )
    lookup_field = 'id'

    filter_backends = [
        FilteringFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
    ]

    search_fields = (
        'title',
        'body',
    )

    filter_fields = {
        'id': {
            'field': 'id',
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
            ],
        },
        'slug': 'slug.raw',
        'title': 'title.raw',
        'body': 'body.raw',
        'date': 'date.raw',
    }

    ordering_fields = {
        'id': 'id',
        'slug': 'slug.raw',
        'title': 'title.raw',
        'body': 'body.raw',
        'date': 'date.raw',
    }

    ordering = ('id', )