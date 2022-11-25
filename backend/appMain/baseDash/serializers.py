from django.contrib.auth import get_user_model, authenticate, login, logout
from django.db.models import Q
from django.urls import reverse
from django.utils import timezone

from rest_framework import serializers

from .models import Contest, Prediction, Profile

User = get_user_model()


class UserPublicSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False, allow_blank=True, read_only=True)
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            ]



class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction

        fields = [
            'id',
            'slug',
            'source',
            'contest'

        ]


    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.user == request.user:
                return True
        return False



class ContestSerializer(serializers.ModelSerializer):
    entry = EntrySerializer(many=True, read_only=True)



    class Meta:
        model = Contest
        fields = [
            'day',
            'entry',
            'slug'

        ]
    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.user == request.user:
                return True
        return False
