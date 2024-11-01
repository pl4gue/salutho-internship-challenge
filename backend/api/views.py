from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpRequest
import json

from .utils.validate_input import validate_input
from .utils.interval_divisible_finder import find_divisible_by_interval

# Create your views here.
@api_view(['POST'])
def interval_divisible_view(request: HttpRequest):
    try:
        data = json.loads(request.body)
        start, end = validate_input(data)

        result = find_divisible_by_interval(start, end)

        return Response({'result': result}, status=status.HTTP_200_OK)
    except (ValueError, json.JSONDecodeError):
        return Response({'error': 'Invalid input'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception:
        return Response({'error': 'Unknown error'}, status=status.HTTP_400_BAD_REQUEST)
