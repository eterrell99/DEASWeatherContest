from django.contrib.auth import get_user_model, authenticate, login, logout
from django.db.models import Q
from django.urls import reverse
from django.utils import timezone

from rest_framework import serializers

from .models import Contest, Prediction, Leaderboard, Score, Report

User = get_user_model()
# include more into one serializer

class UserPublicSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False, allow_blank=True, read_only=True)
    class Meta:
        model = User
        fields = [

            'username',
            'id',
            'first_name',
            'last_name',

            ]


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = '__all__'


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'






class ContestSerializer(serializers.ModelSerializer):
    #is_active = serializers.Field()
    class Meta:
        model = Contest
        fields = ['id','day','url','cOpen','cCLose','isOpen','slug']


    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.user == request.user:
                return True
        return False


class EntrySerializer(serializers.ModelSerializer):
    contest = ContestSerializer
    class Meta:
        model = Prediction
        fields = '__all__'



    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.user == request.user:
                print(request.user.username)
                return True
        return False

class CreateEntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Prediction

        fields = '__all__'

class ResultSerializer(serializers.ModelSerializer):
    #source = UserPublicSerializer(many=False,read_only=True)
    #contest = ContestSerializer(many=True,read_only=True)

    class Meta:
        model = Prediction
        fields = '__all__'

class LeaderboardSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer
    predictions = EntrySerializer
    class Meta:
        model = Leaderboard
        fields ='__all__'