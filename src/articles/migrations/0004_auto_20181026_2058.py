# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-10-26 14:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_article_thumbnail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='thumbnail',
            field=models.ImageField(blank=True, default='default.jpg', upload_to=''),
        ),
    ]