from django.contrib import admin

# Register your models here.
from .models import Contest, Prediction, Profile


admin.site.register(Profile)
admin.site.register(Contest)
admin.site.register(Prediction)