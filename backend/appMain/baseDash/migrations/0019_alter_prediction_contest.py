# Generated by Django 4.1.3 on 2022-12-12 13:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('baseDash', '0018_rename_overall_score_score_entry_score_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prediction',
            name='contest',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='contest', to='baseDash.contest'),
        ),
    ]
