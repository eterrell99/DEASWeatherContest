# Generated by Django 4.1.3 on 2022-12-12 09:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('baseDash', '0016_leaderboard_alter_report_source_alter_score_source_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prediction',
            name='contest',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='entries', to='baseDash.contest'),
        ),
    ]