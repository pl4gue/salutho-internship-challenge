from typing import Dict, Tuple

def validate_input(data: Dict[str,str]) -> Tuple[int, int]:
    try:
        start = int(data.get('start', 0))
        end = int(data.get('end',0))
        return start, end
    except (ValueError, TypeError):
        raise ValueError("Invalid input")
    

