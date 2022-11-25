from django.db import models
from django.contrib.auth.models import User
from random import randint
from django.utils import timezone

# Create your models here.



class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_img')
    profileSlug = models.SlugField(max_length=20, blank=True, null=True)
    def __str__(self):
        return f'{self.profileSlug} - Profile'

class Contest(models.Model):

    day = models.DateField()
    info = models.CharField(default='sample description', max_length=500)
    url = models.CharField(default='/sample_url', max_length=40)
    lnk = models.CharField(default='hi', max_length=1000)
    cOpen = models.DateTimeField(null=True)
    cCLose = models.DateTimeField(null=True)
    slug = models.SlugField(blank=True, null=True)

    def __str__(self):
        return f'{self.day}'

class Prediction(models.Model):
    source = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True, blank=True,related_name='thesource')
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE,default=0,related_name='entry')
    slug = models.SlugField(blank=True, null=True)
    last_modified = models.DateField(auto_now=True, auto_now_add=False)
    created = models.DateField(auto_now=False, auto_now_add=True)

    p1_high_temp = models.FloatField(max_length=4,default=0)
    p1_tr0 = models.FloatField(default=0)
    p1_tr1 = models.FloatField(default=0)
    p1_tr2 = models.FloatField(default=0)
    p1_tr3 = models.FloatField(default=0)
    p1_tr4 = models.FloatField(default=0)
    p1_tr5 = models.FloatField(default=0)

    p2_low_temp = models.FloatField(max_length=4, default=0)
    p2_tr0 = models.FloatField(default=0)
    p2_tr1 = models.FloatField(default=0)
    p2_tr2 = models.FloatField(default=0)
    p2_tr3 = models.FloatField(default=0)
    p2_tr4 = models.FloatField(default=0)
    p2_tr5 = models.FloatField(default=0)

    p3_high_temp = models.FloatField(max_length=4, default=0)
    p3_tr0 = models.FloatField(default=0)
    p3_tr1 = models.FloatField(default=0)
    p3_tr2 = models.FloatField(default=0)
    p3_tr3 = models.FloatField(default=0)
    p3_tr4 = models.FloatField(default=0)
    p3_tr5 = models.FloatField(default=0)

    p4_low_temp = models.FloatField(max_length=4, default=0)
    p4_tr0 = models.FloatField(default=0)
    p4_tr1 = models.FloatField(default=0)
    p4_tr2 = models.FloatField(default=0)
    p4_tr3 = models.FloatField(default=0)
    p4_tr4 = models.FloatField(default=0)
    p4_tr5 = models.FloatField(default=0)


    def __str__(self):
        return f'Contest Date: {self.contest.day}'

'''
every time a forecast is made, four periods of forecasts are made:

Period 1:  Tonight (00Z to 12Z*)
Period 2: Tomorrow (12Z to 00Z)
Period 3:  Tomorrow night (00Z to 12Z)
Period 4:  Next day (12Z to 00Z)
*Z is Zulu time, which is the same as GMT or UTC.


For each period, forecasters will enter a temperature 


For each period, forecasters will also enter a precipitation forecast.  For each period, forecasters will enter a probability (0, 1, 2, 3, .... 10, corresponding to 0%, 10%, 20%, 30%, ... to 100%) that the precipitation total will fall in the following ranges:
0 or Trace
Trace to 0.05"
0.06" to 0.14"
0.15" to 0.24"
0.25" to 0.49"
0.50" or more

ex:

Period 1:  Low temp 56, Precip 7, 2, 1, 0, 0, 0
Period 2:  High temp 77, Precip 9, 1, 0, 0, 0, 0
Period 3:  Low temp 60, Precip 0, 3, 4, 2, 0, 0
Period 4:  High temp 70, Precip 0, 0, 0, 2, 2, 6



'''