from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login/', index),
    path('navbar/', index),
    path('submit/', index),
    path('contests/all/', index),
    path('contests/<str:roomCode>', index),
    path('score/leaderboard/',index)


]