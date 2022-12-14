from django.urls import path, re_path
from .views import *
from rest_framework import routers

app_name = 'dashMain'





urlpatterns = [
    path('contest/', contestList.as_view(), name='contestList'),
    path('contest/active/', getActive.as_view(), name='getActive'),
    path('contest/<pk>', contestDetail.as_view(), name='contestDetail'),
    path('detail/', predictionList.as_view(), name='entryList'),
    path('detail/<pk>', entryDetail.as_view(), name='entryDetail'),
    path('detail/hasentered/', hasEntered.as_view(), name='hasEntered'),
    path('results/', resultList.as_view(),name='result'),
    path('results/item/', resultDetail.as_view(),name='resultDetail'),
    path('detailcreate/', CreateEntryView.as_view(), name='entryCreate'),
    path('report/', reportList.as_view(), name='reportList'),
    path('score/', scoreList.as_view(), name='scoreList'),
    path('score/leaderboard/', leaderboardList.as_view(), name='profileList'),
    path('user/', userList.as_view(), name='userDetail'),



]
#urlpatterns+=router.urls