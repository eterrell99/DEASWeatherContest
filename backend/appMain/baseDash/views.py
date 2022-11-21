from rest_framework import generics
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from .models import Contest, Prediction, Profile
from .serializers import ContestSerializer, EntrySerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
# Create your views here.
from django.contrib.auth import logout, login, authenticate
from django.http import HttpResponseRedirect
#from rest_framework import viewset

def updateContest():

    pass

def scoreEntries():

    pass


class entryDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.SessionAuthentication,
                              authentication.BasicAuthentication,
                              authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    lookup_fields = ['Prediction','pk','slug','source']

class contestDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.SessionAuthentication,
                              authentication.BasicAuthentication,
                              authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    lookup_fields = ['Contest','pk','slug','day']

class contestList(generics.ListCreateAPIView):
    authentication_classes = [authentication.SessionAuthentication]
    permission_classes = [permissions.IsAdminUser]
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    lookup_fields = ['Contest', 'pk', 'slug', 'day']


class predictionList(generics.ListCreateAPIView):
    authentication_classes = [authentication.SessionAuthentication,
                              authentication.BasicAuthentication,
                              authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    lookup_fields = ['contest', 'source', 'slug']


