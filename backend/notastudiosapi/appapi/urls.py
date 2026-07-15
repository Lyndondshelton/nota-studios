from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('studio-equipment/', views.get_studio_equipment_list, name='studio-equipment'),
    path('service-schedule/', views.get_service_schedule, name='service-schedule'),
    path('studio-services/', views.get_studio_services, name='studio_services'),
    path('artist-list/', views.get_artist_list, name='artist-list'),
]