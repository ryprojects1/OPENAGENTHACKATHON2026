from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="WaitWise API")

# Lets the website (running on port 3000) call this server from the browser.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/search")
def search(q: str = ""):
    return {"message": "hello world", "query": q}


@app.get("/results")
def results():
    return {"message": "hello world", "results": []}
