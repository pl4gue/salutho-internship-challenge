from math import gcd
from functools import reduce

'''
    Calculamos do menor multiplo comum para diminuir a complexidade da função.

    iterando cada numero temos O(n * m), 
    n = (end - start) - quantidade de verificações,
    m                 - quantidade de números verificados (resultado final)

    usando o menor multiplo comum (lcm) temos O(n log k), 
    n = (end - start) - quantidade de chamadas a lcm,
    k = min(a, b)     - quantidade de passados para lcm
'''
def lcm(a: int, b: int):
    return a * b // gcd(a,b)

def find_divisible_by_interval(start: int, end: int) -> int:
        return reduce(lcm, range(start, end + 1))
