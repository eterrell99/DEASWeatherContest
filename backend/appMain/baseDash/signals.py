from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver

from .models import Leaderboard, Contest, Prediction


@receiver(post_save, sender=User)
def create_leaderboard(sender, instance, created, **kwargs):
    if created:
        Leaderboard.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_leaderboard(sender, instance, **kwargs):
    try:
        instance.leaderboard.save()
    finally:
        pass

