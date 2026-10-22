
def evaluator(data):
    if not data:
        return False
    if len(data) < 1:
        return False
    for result in data:
        if "trust" not in result:
            return False
        if "wait_weeks" not in result:
            return False
        if "location" not in result:
            return False
    return True