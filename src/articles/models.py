from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    thumbnail = models.ImageField(default="default.jpg", blank=True)

    def __str__(self):
        return self.title
    
    def snippets(self):
        if len(self.body) > 50: 
            return self.body[:50] + "..."
        else:
            return self.body

"""Shell
    python mangage.py shell

    ## Import Module ##
    from articles.models import Article

    ## Get All the Property/Methods ##
    dir(Article)
    
    ## Get all the objects ##
    article = Article.objects.all()
    
    ## Queryset ##
    article 

    ## See the Raw Query ##
    str(article.query)

    ## Get the Instance of the Object ##
    article = Articles()

    ## Create a Object ##
    article.title = "WordPress'
    article.body = "Easiest implementation of PHP for Blogging"
    article.slug = "wordpress-1"
    
    ## Save a Object ##
    article.save()

    ## Get the first Instance of the List of Objects ##
    Article.objects.all()[0].title
    Article.objects.all()[0].body
"""
