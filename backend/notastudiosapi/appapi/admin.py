from django.contrib import admin
from .models import Service, ServiceSchedule, StudioEquipment, Artist

# Admin Site Variables
admin.site.site_header = "NOTA Studios Admin"
admin.site.site_title = "NOTA Studios"
admin.site.index_title = "Dashboard"

# Register your models here.
admin.site.register(Service)
admin.site.register(ServiceSchedule)
admin.site.register(StudioEquipment)
admin.site.register(Artist)
