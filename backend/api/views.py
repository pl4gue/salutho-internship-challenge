from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpRequest
from rest_framework import status
from typing import Dict, Tuple
from functools import reduce
from math import gcd
import json

"""
    Helper functions
"""


def lcm(a: int, b: int):
    return a * b // gcd(a, b)


def validate_input(data: Dict[str, str]) -> Tuple[int, int]:
    try:
        start = int(data.get("start", 0))
        end = int(data.get("end", 0))
        return start, end
    except (ValueError, TypeError):
        raise ValueError("Invalid input")


"""
    Calculamos do menor multiplo comum para diminuir a complexidade da função.

    iterando cada numero temos O(n * m), 
    n = (end - start) - quantidade de verificações,
    m                 - quantidade de números verificados (resultado final)

    usando o menor multiplo comum (lcm) temos O(n log k), 
    n = (end - start) - quantidade de chamadas a lcm,
    k = min(a, b)     - quantidade de passados para lcm
"""


# Create your views here.
@api_view(["POST"])
def interval_lcm_view(request: HttpRequest):
    try:
        data = json.loads(request.body)
        start, end = validate_input(data)

        result = reduce(lcm, range(start, end + 1))

        """
            Capture números que excedam o limite do python
        """
        try:
            str(result)
        except ValueError:
            raise ValueError("Result exceeds the limit for integer string conversion.")

        response = Response({"result": f"{result}"}, status=status.HTTP_200_OK)
        return response
    except (ValueError, json.JSONDecodeError) as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception:
        return Response({"error": "Unknown error"}, status=status.HTTP_400_BAD_REQUEST)
