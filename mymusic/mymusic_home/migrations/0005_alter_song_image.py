# Generated by Django 5.0.3 on 2024-03-20 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mymusic_home', '0004_alter_song_create_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
