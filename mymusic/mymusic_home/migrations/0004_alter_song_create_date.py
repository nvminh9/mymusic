# Generated by Django 5.0.3 on 2024-03-19 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mymusic_home', '0003_song_create_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='create_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
