# Generated by Django 5.2 on 2025-04-25 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('producto', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productos',
            name='descripcion',
            field=models.TextField(default='Arroz blanco 500g'),
            preserve_default=False,
        ),
    ]
