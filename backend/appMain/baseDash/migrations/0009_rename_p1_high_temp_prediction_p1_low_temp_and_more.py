# Generated by Django 4.1.3 on 2022-11-30 06:14

import baseDash.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('baseDash', '0008_alter_prediction_p1_high_temp_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prediction',
            old_name='p1_high_temp',
            new_name='p1_low_temp',
        ),
        migrations.RenameField(
            model_name='prediction',
            old_name='p2_low_temp',
            new_name='p2_high_temp',
        ),
        migrations.RenameField(
            model_name='prediction',
            old_name='p3_high_temp',
            new_name='p3_low_temp',
        ),
        migrations.RenameField(
            model_name='prediction',
            old_name='p4_low_temp',
            new_name='p4_high_temp',
        ),
        migrations.AlterField(
            model_name='contest',
            name='cCLose',
            field=models.DateTimeField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='prediction',
            name='slug',
            field=models.SlugField(blank=True, default=baseDash.models.generate_slug_code, null=True),
        ),
        migrations.AlterField(
            model_name='prediction',
            name='source',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='thesource', to=settings.AUTH_USER_MODEL),
        ),
    ]
