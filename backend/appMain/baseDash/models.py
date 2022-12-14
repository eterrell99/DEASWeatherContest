import datetime
from django.db import models
from django.contrib.auth.models import User
from random import randint
from django.utils import timezone
from datetime import date
import string
import random



def generate_slug_code():
    length = 8
    while True:
        slug = ''.join(random.choices(string.ascii_lowercase,k=length))
        if Contest.objects.filter(slug=slug).count == 0:
            break
    return slug



class Contest(models.Model):
    day = models.DateField()
    info = models.CharField(default='sample description', max_length=500)
    url = models.CharField(default='/sample_url', max_length=40)
    lnk = models.CharField(default='hi', max_length=1000)
    cOpen = models.DateTimeField(null=True)
    cCLose = models.DateTimeField(default='',null=True)
    slug = models.SlugField(blank=True, null=True,default=generate_slug_code)
    isOpen = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.day}'


class Prediction(models.Model):
    source = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='thesource')
    contest = models.ForeignKey(Contest, related_name='contest', on_delete=models.CASCADE, default=0)
    slug = models.SlugField(default=generate_slug_code, blank=False, null=True)
    last_modified = models.DateField(auto_now=True, auto_now_add=False)
    created = models.DateField(auto_now=False, auto_now_add=True)

    p1_low_temp = models.IntegerField(default=0, null=True, blank=True)
    p1_tr0 = models.IntegerField(default=0, null=True, blank=True)
    p1_tr1 = models.IntegerField(default=0, null=True, blank=True)
    p1_tr2 = models.FloatField(default=0, null=True, blank=True)
    p1_tr3 = models.FloatField(default=0, null=True, blank=True)
    p1_tr4 = models.FloatField(default=0, null=True, blank=True)
    p1_tr5 = models.FloatField(default=0, null=True, blank=True)

    p2_high_temp = models.IntegerField(default=0, null=True, blank=True)
    p2_tr0 = models.FloatField(default=0, null=True, blank=True)
    p2_tr1 = models.FloatField(default=0, null=True, blank=True)
    p2_tr2 = models.FloatField(default=0, null=True, blank=True)
    p2_tr3 = models.FloatField(default=0, null=True, blank=True)
    p2_tr4 = models.FloatField(default=0, null=True, blank=True)
    p2_tr5 = models.FloatField(default=0, null=True, blank=True)

    p3_low_temp = models.IntegerField(default=0, null=True, blank=True)
    p3_tr0 = models.FloatField(default=0, null=True, blank=True)
    p3_tr1 = models.FloatField(default=0, null=True, blank=True)
    p3_tr2 = models.FloatField(default=0, null=True, blank=True)
    p3_tr3 = models.FloatField(default=0, null=True, blank=True)
    p3_tr4 = models.FloatField(default=0, null=True, blank=True)
    p3_tr5 = models.FloatField(default=0, null=True, blank=True)

    p4_high_temp = models.IntegerField(default=0, null=True, blank=True)
    p4_tr0 = models.FloatField(default=0, null=True, blank=True)
    p4_tr1 = models.FloatField(default=0, null=True, blank=True)
    p4_tr2 = models.FloatField(default=0, null=True, blank=True)
    p4_tr3 = models.FloatField(default=0, null=True, blank=True)
    p4_tr4 = models.FloatField(default=0, null=True, blank=True)
    p4_tr5 = models.FloatField(default=0, null=True, blank=True)


    def __str__(self):
        return f'Contest Date: {self.contest.day}'

class Report(models.Model):
    source = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE,default=0)
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


class Leaderboard(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    entries = models.IntegerField(default=0)
    overall = models.FloatField(default=0.00)
    predictions = models.ManyToManyField(Prediction)

    def count(self):
        entry = Prediction.objects.filter(source=self.user)
        return (entry.length)
    def __str__(self):
        return f'{self.user.username} - {self.entries}'



class Score(models.Model):
    source = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE, default=0)
    entry = models.ForeignKey(Prediction, on_delete=models.CASCADE, null=True, blank=True)
    report = models.ForeignKey(Report, on_delete=models.CASCADE, null=True, blank=True)
    entry_score = models.FloatField(max_length=4,default=0.00)
    leaderboard = models.ForeignKey(Leaderboard, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.overall_score}'




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