from typing import List
from datetime import datetime
from .models import Application, ApplicationCreate

applications: List[Application] = []
application_counter = 0

def add_application(data: ApplicationCreate) -> Application:
    global application_counter
    application_counter += 1
    new_app = Application(
        id=application_counter,
        company=data.company,
        job_title=data.job_title,
        location=data.location,
        application_link=data.application_link,
        date_applied=datetime.now(),
        status=data.status,
        priority=data.priority
    )
    applications.append(new_app)
    return new_app

def get_all_applications() -> List[Application]:
    return applications

def get_application_by_id(app_id: int) -> Application:
    for app in applications:
        if app.id == app_id:
            return app
    return None

def update_application_by_id(app_id: int, data: ApplicationCreate) -> Application:
    for idx, app in enumerate(applications):
        if app.id == app_id:
            updated_app = Application(
                id=app_id,
                company=data.company,
                job_title=data.job_title,
                location=data.location,
                application_link=data.application_link,
                date_applied=app.date_applied,
                status=data.status,
                priority=data.priority
            )
            applications[idx] = updated_app
            return updated_app
    return None

def delete_application_by_id(app_id: int) -> bool:
    for idx, app in enumerate(applications):
        if app.id == app_id:
            del applications[idx]
            return True
    return False
