# Generated by Django 4.1.3 on 2022-11-26 06:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('baseDash', '0005_alter_prediction_source'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(blank=True, null=True)),
                ('last_modified', models.DateField(auto_now=True)),
                ('created', models.DateField(auto_now_add=True)),
                ('p1_high_temp', models.FloatField(default=0, max_length=4)),
                ('p1_tr0', models.FloatField(default=0)),
                ('p1_tr1', models.FloatField(default=0)),
                ('p1_tr2', models.FloatField(default=0)),
                ('p1_tr3', models.FloatField(default=0)),
                ('p1_tr4', models.FloatField(default=0)),
                ('p1_tr5', models.FloatField(default=0)),
                ('p2_low_temp', models.FloatField(default=0, max_length=4)),
                ('p2_tr0', models.FloatField(default=0)),
                ('p2_tr1', models.FloatField(default=0)),
                ('p2_tr2', models.FloatField(default=0)),
                ('p2_tr3', models.FloatField(default=0)),
                ('p2_tr4', models.FloatField(default=0)),
                ('p2_tr5', models.FloatField(default=0)),
                ('p3_high_temp', models.FloatField(default=0, max_length=4)),
                ('p3_tr0', models.FloatField(default=0)),
                ('p3_tr1', models.FloatField(default=0)),
                ('p3_tr2', models.FloatField(default=0)),
                ('p3_tr3', models.FloatField(default=0)),
                ('p3_tr4', models.FloatField(default=0)),
                ('p3_tr5', models.FloatField(default=0)),
                ('p4_low_temp', models.FloatField(default=0, max_length=4)),
                ('p4_tr0', models.FloatField(default=0)),
                ('p4_tr1', models.FloatField(default=0)),
                ('p4_tr2', models.FloatField(default=0)),
                ('p4_tr3', models.FloatField(default=0)),
                ('p4_tr4', models.FloatField(default=0)),
                ('p4_tr5', models.FloatField(default=0)),
                ('contest', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='baseDash.contest')),
                ('source', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='baseDash.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('overall_score', models.FloatField(default=0.0, max_length=4)),
                ('contest', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='baseDash.contest')),
                ('entry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='baseDash.prediction')),
                ('report', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='baseDash.report')),
                ('source', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='baseDash.profile')),
            ],
        ),
    ]
