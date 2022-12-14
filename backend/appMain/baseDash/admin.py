from django.contrib import admin

# Register your models here.
from .models import Contest, Prediction,Leaderboard, Score, Report


admin.site.register(Leaderboard)
admin.site.register(Contest)
admin.site.register(Prediction)
admin.site.register(Report)
admin.site.register(Score)