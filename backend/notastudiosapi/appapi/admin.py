from django import forms
from django.contrib import admin
from .models import Service, ServiceSchedule, StudioEquipment, Artist, Track

# Admin Site Variables
admin.site.site_header = "NOTA Studios Admin"
admin.site.site_title = "NOTA Studios"
admin.site.index_title = "Dashboard"

# Register your models here.
admin.site.register(Service)
admin.site.register(ServiceSchedule)
admin.site.register(StudioEquipment)
admin.site.register(Artist)
# admin.site.register(Track)


class TrackAdminForm(forms.ModelForm):
    """Customizes the Track edit form on the Admin page. Meta is used to modify the metadata of the Track model."""
    class Meta:
        model = Track
        fields = "__all__"
        widgets = {
            "audio_file": forms.ClearableFileInput(
                attrs={
                    "accept": ".mp3,.wav,audio/mpeg,audio/wav",
                }
            ),
        }


@admin.action(description="Publish selected tracks")
def publish_tracks(modeladmin,request,queryset,):
    queryset.update(is_published=True)


@admin.action(description="Unpublish selected tracks")
def unpublish_tracks(modeladmin,request,queryset,):
    queryset.update(is_published=False)


@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    """Customizes the Track admin list view. Update 'search' and visible columns here."""
    form = TrackAdminForm

    list_display = (
        "title",
        "artist",
        "release_date",
        "is_published",
        "created_on",
    )

    list_filter = (
        "is_published",
        "artist",
    )

    search_fields = (
        "title",
        "artist",
    )


