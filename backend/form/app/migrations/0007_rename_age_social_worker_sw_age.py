# Generated by Django 4.2.2 on 2023-06-09 17:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_social_worker'),
    ]

    operations = [
        migrations.RenameField(
            model_name='social_worker',
            old_name='Age',
            new_name='SW_Age',
        ),
    ]
