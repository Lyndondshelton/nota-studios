from django.core.validators import FileExtensionValidator
from django.db import models
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _

"""
This is where database tables are defined. Models define how data is stored.
CharField and TextField do not require max_length for PostgreSQL, but should be defined for CharField incase the db is 
migrated to any other db adapter, and for User Experience (UX). TextField should only use max_length 
if User Interface/Experience (UI/UX) issues occur.
"""

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
    description = models.TextField()
    sub_description = models.TextField(blank=True, default="")
    price_desc = models.TextField(blank=True, default="")
    def __str__(self):
        return self.name


class StudioEquipment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    def __str__(self):
        return self.name


class Artist(models.Model):
    artist_name = models.CharField(max_length=50)
    featured_image = models.ImageField(
        upload_to="imgs/artists/",
        blank=True,
        null=True,
    )
    featured_image_alt = models.CharField(
        max_length=50,
        blank=True,
    )
    artist_bio = models.TextField()
    social_link = models.CharField(max_length=255)
    def __str__(self):
        return self.artist_name


class Track(models.Model):
    title = models.CharField(max_length=50)
    artist = models.CharField(max_length=50)
    description = models.TextField(
        default="Recorded, Mixed & Mastered - NOTA Studios, Pittsburgh, PA",
        blank=True,
        null=True,
    );
    audio_file = models.FileField(
        upload_to="audio/music/",
        validators=[
            FileExtensionValidator(
                allowed_extensions=["mp3", "wav"]
            )
        ],
    )
    album_art = models.ImageField(
        upload_to="audio/artwork/",
        blank=True,
        null=True,
    )
    release_date = models.DateField()
    created_on = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering=["-release_date"]


    def __str__(self):
        return self.title


class BlogPost(models.Model):
    title = models.CharField(
        max_length=255,
        unique=True)
    slug = models.SlugField(
        unique=True,
        blank=True,
        help_text="Leave blank to generate automatically from title.")
    sub_title = models.CharField(
        max_length=255,
        blank=True,)
    author = models.CharField(max_length=50)
    content = models.TextField(
        help_text="Full blog post using Markdown")
    updated_on = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    published_date = models.DateTimeField(
        blank=True,
        null=True,
    )

    # if self.is_published and self.published_date is None:
    #     self.published_date = timezone.now()

    def save(self, *args, **kwargs):
        #Create slug from title if user doesn't
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
