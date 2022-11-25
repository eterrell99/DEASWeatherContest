from rest_framework import generics
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from .models import Contest, Prediction, Profile
from .serializers import ContestSerializer, EntrySerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
# Create your views here.
from django.contrib.auth import logout, login, authenticate
from django.http.response import HttpResponse
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

def updateContest():

    pass

def scoreEntries():

    pass


class entryDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['Prediction','pk','slug','source']


class contestDetail(generics.RetrieveDestroyAPIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['Contest','pk','slug','day']


class contestList(viewsets.ModelViewSet):
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
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000"}
    lookup_fields = ['contest', 'source', 'slug']



