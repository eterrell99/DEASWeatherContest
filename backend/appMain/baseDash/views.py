from rest_framework import generics
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from .models import Contest, Prediction, Profile, Score, Report
from .serializers import ContestSerializer, EntrySerializer, UserPublicSerializer, ScoreSerializer,ReportSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
# Create your views here.
from rest_framework import status
from django.contrib.auth import logout, login, authenticate
from django.http.response import HttpResponse
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
def updateContest():

    pass



class reportList(generics.ListCreateAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = '__all__'



class scoreList(generics.ListCreateAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['overall_score']


class profileList(generics.ListAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['username']


class profileDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['username']

class userList(generics.ListAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['username']


class userDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['username']

class entryDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = '__all__'



class contestDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = '__all__'


class contestList(generics.ListCreateAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['Contest', 'pk', 'slug', 'day']


    # def finalize_response(self, request, *args, **kwargs):
    #     response = super(contestList, self).finalize_response(request, *args, **kwargs)
    #     response["Access-Control-Allow-Origin"] = "true"
    #     return response

class predictionList(generics.ListCreateAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000/"}
    lookup_fields = ['__all__']

class predictionCreate(generics.CreateAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000/"}
    lookup_fields = ['__all__']
