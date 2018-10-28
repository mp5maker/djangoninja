from django.db.models.signals import (
    pre_init,
    post_init,
    pre_save,
    post_save,
    pre_delete,
    post_delete,
    m2m_changed,
    class_prepared,
    pre_migrate,
    post_migrate,
)

from django.core.signals import (
    request_started,
    request_finished,
    got_request_exception,
    setting_changed,
)

from django.dispatch import receiver

from articles.models import Article

@receiver(post_save, sender=Article)
def article_post_save(sender, instance, created, **kwargs):
    print("Signal")
    print(instance)
    print(created)
