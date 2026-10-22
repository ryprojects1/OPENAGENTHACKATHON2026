def executor(plan):
     data = [
        {
            "trust": "Surrey and Sussex NHS Trust",
            "wait_weeks": 18,
            "specialty": plan["treatment"],
            "location": plan["location"]
        },
        {
            "trust": "Epsom and St Helier NHS Trust",
            "wait_weeks": 24,
            "specialty": plan["treatment"],
            "location": plan["location"]
        },
        {
            "trust": "Ashford and St Peters NHS Trust",
            "wait_weeks": 31,
            "specialty": plan["treatment"],
            "location": plan["location"]
        }
    ]
     return data