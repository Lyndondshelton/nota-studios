import logging

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_GET

from .models import StudioEquipment, ServiceSchedule, Service, Artist

logger = logging.getLogger(__name__)

OK_STATUS = "OK"
ERROR_STATUS = "ERROR"

# Create your views here.
def index(request):
    return JsonResponse({
        'message': 'Hello NOTA!',
        'status': OK_STATUS
    })


@require_GET
def get_studio_services(request):
    logger.debug("Attempting to fetch studio services...")
    try:
        services = [
            {
                'id': service.id,
                'name': service.name,
                'desc': service.description,
                'sub_desc': service.sub_description,
                'price_desc': service.price_desc
            }
            for service in Service.objects.order_by('id')
        ]

        logger.debug("Able to create services array: ", services)

        return JsonResponse({
            'data': services,
            'message': 'Successfully fetched Services List',
            'status': OK_STATUS
        }, status = 200)
    except Exception:
        logger.debug("Unable to fetch services list: ")
        return JsonResponse({
            'data': None,
            'message': 'Unexpected error occurred while fetching Services List',
            'status': ERROR_STATUS,
        }, status = 500)


@require_GET
def get_service_schedule(request):
    try:
        schedule = [
            {
                'day_of_week': item.day_of_week,
                'day_name': item.get_day_of_week_display(),
                'start_time': item.start_time,
                'end_time': item.end_time,
            }
            for item in ServiceSchedule.objects.order_by('day_of_week')
        ]

        return JsonResponse({
            'data': schedule,
            'message' : 'Service Schedule fetched successfully!',
            'status' : OK_STATUS
        }, status=200)
    except Exception:
        return JsonResponse({
            'data': None,
            'message': 'Failed to fetch service schedule',
            'status': ERROR_STATUS
        }, status=500)



@require_GET
def get_studio_equipment_list(request):
    try:
        equipment = list(
            StudioEquipment.objects
            .values('id', 'name', 'description')
            .order_by('id')
        )

        return JsonResponse({
            'data': equipment,
            'message': 'Studio equipment fetched successfully',
            'status': OK_STATUS
        }, status=200)

    except Exception:
        return JsonResponse({
            'data': None,
            'message': 'Failed to fetch studio equipment',
            'status': ERROR_STATUS
        }, status=500)

@require_GET
def get_artist_list(request):
    try:
        artists = Artist.objects.all().order_by("id")

        logger.debug("artist list fetched: ", artists)

        artist_data = [
            {
                "id": artist.id,
                "artist_name": artist.artist_name,
                "artist_bio": artist.artist_bio,
                "featured_image_url": (
                    artist.featured_image.url
                    if artist.featured_image
                    else None
                ),
                "featured_image_alt": artist.featured_image_alt,
                "social_link": artist.social_link,
            }
            for artist in artists
        ]

        return JsonResponse({
            'data': artist_data,
            'message':'Artist list fetched successfully',
            'status':OK_STATUS
        }, status=200)
    except Exception:
        return JsonResponse({
            'data': None,
            'message': 'Failed to fetch artist list',
            'status': ERROR_STATUS
        }, status=500)