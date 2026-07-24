from django.urls import path
from django.contrib.auth import views as auth_views
from django.contrib import admin
from . import views

urlpatterns = [

    #Django Admin Passowrd Reset URLs
    path(
        "admin/password_reset/",
        auth_views.PasswordResetView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="admin_password_reset",
    ),
    path(
        "admin/password_reset/done/",
        auth_views.PasswordResetDoneView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="password_reset_done",
    ),
    path(
        "reset/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="password_reset_confirm",
    ),
    path(
        "reset/done/",
        auth_views.PasswordResetCompleteView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="password_reset_complete",
    ),

    # Website URLS
    path('', views.index, name='index'),
    path('studio-equipment/', views.get_studio_equipment_list, name='studio-equipment'),
    path('service-schedule/', views.get_service_schedule, name='service-schedule'),
    path('studio-services/', views.get_studio_services, name='studio_services'),
    path('artist-list/', views.get_artist_list, name='artist-list'),
    path('music-list/', views.get_music_list, name='music-list'),
]