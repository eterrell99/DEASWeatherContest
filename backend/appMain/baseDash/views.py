from rest_framework import generics
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from .models import Contest, Prediction, Profile, Score, Report, generate_slug_code
#from token_blacklist.models import OutstandingTokens
from .serializers import ContestSerializer, EntrySerializer, UserPublicSerializer, ScoreSerializer,ReportSerializer,CreateEntrySerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
# Create your views here.
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import logout, login, authenticate
from django.http.response import HttpResponse
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import AccessToken
from datetime import *
def updateContest():

    pass
def userFromToken(access):
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

class predictionCreate(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    queryset = Prediction.objects.all()
    serializer_class = EntrySerializer
    headers = {"Access-Control-Allow-Origin": "http://localhost:8000/"}
    lookup_fields = ['__all__']


class CreateEntryView(APIView):
    serializer_class = CreateEntrySerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    def post(self, request, format=None):
        if request.method=='POST':

            accessObj = AccessToken(request.data['token'])
            user_id = accessObj['user_id']
            user = User.objects.get(id=user_id)
            print(request.data)
            serializer = self.serializer_class(data=request.data)
            contest = Contest.objects.get(day=date.today())
            if serializer.is_valid():
                queryset = Prediction.objects.filter(source=user,contest=contest)
                if queryset.exists():
                    prediction = queryset[0]

                    prediction.p1_low_temp = int(request.data['p1_low_temp']),
                    prediction.p2_high_temp = int(request.data['p2_high_temp']),
                    prediction.p3_low_temp = int(request.data['p3_low_temp'])
                    prediction.p4_high_temp = int(request.data['p4_high_temp']),
                    prediction.p1_tr0 = request.data['p1_tr0'],
                    prediction.p1_tr1 = request.data['p1_tr1'],
                    prediction.p1_tr2 = request.data['p1_tr2'],
                    prediction.p1_tr3 = request.data['p1_tr3'],
                    prediction.p1_tr4 = request.data['p1_tr4'],
                    prediction.p1_tr5 = request.data['p1_tr5'],
                    prediction.p2_tr0 = request.data['p2_tr0'],
                    prediction.p2_tr1 = request.data['p2_tr1'],
                    prediction.p2_tr2 = request.data['p2_tr2'],
                    prediction.p2_tr3 = request.data['p2_tr3'],
                    prediction.p2_tr4 = request.data['p2_tr4'],
                    prediction.p2_tr5 = request.data['p2_tr5'],
                    prediction.p3_tr0 = request.data['p3_tr0'],
                    prediction.p3_tr1 = request.data['p3_tr1'],
                    prediction.p3_tr2 = request.data['p3_tr2'],
                    prediction.p3_tr3 = request.data['p3_tr3'],
                    prediction.p3_tr4 = request.data['p3_tr4'],
                    prediction.p3_tr5 = request.data['p3_tr5'],
                    prediction.p4_tr0 = request.data['p4_tr0'],
                    prediction.p4_tr1 = request.data['p4_tr1'],
                    prediction.p4_tr2 = request.data['p4_tr2'],
                    prediction.p4_tr3 = request.data['p4_tr3'],
                    prediction.p4_tr4 = request.data['p4_tr4'],
                    prediction.p4_tr5 = request.data['p4_tr5'],

                    prediction.save()
                    return Response(EntrySerializer(prediction).data, status=status.HTTP_200_OK)
                else:

                    prediction = Prediction(contest=contest, source=user, slug=generate_slug_code(),

                    p1_low_temp= request.data.p1_low_temp,
                    p2_high_temp= request.data.p2_high_temp,
                    p3_low_temp= request.data.p3_low_temp,
                    p4_high_temp= request.data.p4_high_temp,
                    p1_tr0 = request.data.p1_tr0,
                    p1_tr1 = request.data.p1_tr1,
                    p1_tr2 = request.data.p1_tr2,
                    p1_tr3 = request.data.p1_tr3,
                    p1_tr4 = request.data.p1_tr4,
                    p1_tr5 = request.data.p1_tr5,
                    p2_tr0 = request.data.p2_tr0,
                    p2_tr1 = request.data.p2_tr1,
                    p2_tr2 = request.data.p2_tr2,
                    p2_tr3 = request.data.p2_tr3,
                    p2_tr4 = request.data.p2_tr4,
                    p2_tr5 = request.data.p2_tr5,
                    p3_tr0 = request.data.p3_tr0,
                    p3_tr1 = request.data.p3_tr1,
                    p3_tr2 = request.data.p3_tr2,
                    p3_tr3 = request.data.p3_tr3,
                    p3_tr4 = request.data.p3_tr4,
                    p3_tr5 = request.data.p3_tr5,
                    p4_tr0 = request.data.p4_tr0,
                    p4_tr1 = request.data.p4_tr1,
                    p4_tr2 = request.data.p4_tr2,
                    p4_tr3 = request.data.p4_tr3,
                    p4_tr4 = request.data.p4_tr4,
                    p4_tr5 = request.data.p4_tr5,
                    )
                    prediction.save()
                    return Response(EntrySerializer(prediction).data, status=status.HTTP_201_CREATED)

            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

