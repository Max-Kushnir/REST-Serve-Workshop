from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from backend.models import Application, ApplicationCreate
from backend.crud import (
    add_application, get_all_applications,
    get_application_by_id, update_application_by_id,
    delete_application_by_id
)
import uvicorn

app = FastAPI()

app.mount("/static", StaticFiles(directory="frontend"), name="static")

@app.get("/")
def serve_frontend():
    return FileResponse("frontend/index.html")

@app.post("/applications/", response_model=Application)
def create_application(app_data: ApplicationCreate):
    return add_application(app_data)

@app.get("/applications/", response_model=list[Application])
def get_applications():
    return get_all_applications()

@app.get("/applications/count")
def get_application_count():
    return {"application_count": len(get_all_applications())}

@app.get("/applications/{app_id}", response_model=Application)
def get_application(app_id: int):
    app = get_application_by_id(app_id)
    if app is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return app

@app.put("/applications/{app_id}", response_model=Application)
def update_application(app_id: int, update_data: ApplicationCreate):
    updated_app = update_application_by_id(app_id, update_data)
    if updated_app is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return updated_app

@app.delete("/applications/{app_id}")
def delete_application(app_id: int):
    success = delete_application_by_id(app_id)
    if not success:
        raise HTTPException(status_code=404, detail="Application not found")
    return {"detail": "Application deleted"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
