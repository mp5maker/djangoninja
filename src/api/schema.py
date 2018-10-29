from graphene import List
from graphene_django.types import DjangoObjectType

from articles.models import Article

class ArticleType(DjangoObjectType):
    class Meta:
        model = Article

class ArticleListQuery(object):
    all_articles = List(ArticleType)

    def resolve_all_articles(self, info, **kwargs):
        return Article.objects.all()