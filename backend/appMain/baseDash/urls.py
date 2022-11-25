from django.urls import path, re_path
from .views import *
from rest_framework import routers

app_name = 'dashMain'



urlpatterns = [
    path('contest/<pk>', contestDetail.as_view(), name='contestDetail'),
    path('detail/<pk>', entryDetail.as_view(), name='entryDetail'),
    path('contest/', contestList.as_view({'get': 'list'}), name='contestList'),
    path('detail/', predictionList.as_view(), name='entryList'),

]
#urlpatterns+=router.urls