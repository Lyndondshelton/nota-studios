from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class DayOfWeek(models.IntegerChoices):
    MONDAY = 0, _('Monday')
    TUESDAY = 1, _('Tuesday')
    WEDNESDAY = 2, _('Wednesday')
    THURSDAY = 3, _('Thursday')
    FRIDAY = 4, _('Friday')
    SATURDAY = 5, _('Saturday')
    SUNDAY = 6, _('Sunday')

class ServiceSchedule(models.Model):
    day_of_week = models.IntegerField(choices=DayOfWeek, primary_key=True)
    start_time = models.TimeField("time open")
    end_time = models.TimeField("time closed")
    def __str__(self):
        return self.get_day_of_week_display()


class Service(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    sub_description = models.TextField(max_length=500, blank=True, default="")
    price_desc = models.TextField(max_length=255, blank=True, default="")
    def __str__(self):
        return self.name


class StudioEquipment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    def __str__(self):
        return self.name


class Artist(models.Model):
    artist_name = models.CharField(max_length = 100)
    featured_image = models.ImageField(
        upload_to="imgs/artists/",
        blank=True,
        null=True,
    )
    featured_image_alt = models.CharField(
        max_length=50,
        blank=True,
    )
    artist_bio = models.TextField(max_length=1000)
    social_link = models.CharField(max_length=255)
    def __str__(self):
        return self.artist_name