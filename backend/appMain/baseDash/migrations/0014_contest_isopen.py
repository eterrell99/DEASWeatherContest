# Generated by Django 4.1.3 on 2022-12-08 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseDash', '0013_alter_prediction_p1_low_temp_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='contest',
            name='isOpen',
            field=models.BooleanField(default=False),
        ),
    ]
