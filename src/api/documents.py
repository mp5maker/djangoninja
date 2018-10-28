from django_elasticsearch_dsl import DocType, Index
from articles.models import Article

articles = Index('articles')

@articles.doc_type
class ArticleDocument(DocType):
    class Meta:
        model = Article
        fields = (
            'id',
            'slug',
            'title',
            'body',
            'date'
        )