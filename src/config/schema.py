from graphene import ObjectType, Schema
from api.schema import ArticleListQuery


class Query(ArticleListQuery, ObjectType):
    pass

schema = Schema(query=Query)
