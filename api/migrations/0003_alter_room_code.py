# Generated by Django 5.0.2 on 2024-03-01 12:34

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_room_votes_to_skip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default=api.models.generate_unique_code, max_length=8, unique=True),
        ),
    ]
