# Generated by Django 4.1.3 on 2022-12-01 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseDash', '0011_alter_prediction_p1_low_temp_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prediction',
            name='p1_low_temp',
            field=models.IntegerField(blank=True, default=0, max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='prediction',
            name='p1_tr0',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='prediction',
            name='p1_tr1',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
