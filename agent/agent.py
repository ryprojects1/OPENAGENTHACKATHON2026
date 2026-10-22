from planner import planner
from executor import executor
from evaluator import evaluator
def run_agent(treatment, location, max_retries=3):
    attempts = 0
    while attempts<max_retries:
        print(f"Attempt {attempts+1}...")
        plan = planner(treatment, location)
        print(f"Plan created: {plan}")
        data = executor(plan)
        print(f"Data fetched: {data}")
        if evaluator(data):
            print("Data is good — returning results")
            return sorted(data, key=lambda x: x["wait_weeks"])
        else:
            print("Data not good enough — retrying...")
            attempt += 1
    
    return {"error": "Could not fetch valid data after max retries"}

if __name__ == "__main__":
    results = run_agent("knee replacement", "Surrey")
    for r in results:
        print(r)