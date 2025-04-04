# 📋 Internship Application Tracker

A lightweight web app for tracking internship applications. Built with **FastAPI** for the backend and **HTML/CSS/JavaScript** for the frontend — organized to run in **GitHub Codespaces**.

---

## 🚀 Features

- ✍️ Add applications with:
  - Company Name
  - Job Title
  - Location
  - Application Link
  - Status (Submitted, In-Review, etc.)
  - Priority (Low, Mid, High)
  - Date Applied (auto-generated)
- 🗂️ View and track all applications in a table
- ⚡ FastAPI backend with in-memory CRUD functionality
- 🌐 Clean and simple HTML/CSS/JS frontend
- 📦 Easily deployable with Codespaces + DevContainer

---

## 📁 Folder Structure

```
.
├── backend/
│   ├── models.py         # Pydantic models for data validation
│   └── crud.py           # In-memory data storage and logic
├── frontend/
│   ├── index.html        # HTML user interface
│   ├── style.css         # CSS styling
│   └── script.js         # JavaScript API handling
├── main.py               # FastAPI app and route definitions
├── requirements.txt      # Python dependencies
├── .gitignore            # Git exclusions
├── .devcontainer/        # Codespaces setup
└── README.md             # Project docs
```

---

## 🛠️ Getting Started

### ⚙️ Requirements

- Python 3.10+
- GitHub Codespaces (recommended)
- Or any machine with FastAPI + Uvicorn

### 🧪 Run in GitHub Codespaces

1. Open the repository in a GitHub Codespace
2. In the terminal, run:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

3. Click `PORTS` tab → Forward port `8000` → Open in Browser

---

## 🔍 Using the App

1. Fill in the application form (Company, Job Title, Location, etc.)
2. Click **Add Application**
3. View all submissions in a live-updating table

Each record includes:
- Company name
- Job title
- Location
- Link to application
- Status (e.g. Submitted, Interview, Offer)
- Priority (Low, Mid, High)
- Date applied (auto-generated)

---

## 📂 API Endpoints

- `GET /applications/` – List all applications
- `POST /applications/` – Create a new application
- `GET /applications/{id}` – Retrieve a single application
- `PUT /applications/{id}` – Update an application
- `DELETE /applications/{id}` – Delete an application
- `GET /applications/count` – Get total count

Interactive docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📦 Dependencies

```
fastapi
uvicorn
```

Install with:

```bash
pip install -r requirements.txt
```

---

## 📁 .gitignore

```gitignore
__pycache__/
*.py[cod]
*$py.class
.DS_Store
.venv/
env/
venv/
*.log
```

---

## 📄 License

MIT License © 2025 Maxime Kushnir

---

## 🤛 Questions or Suggestions?

Open an issue or discussion in the GitHub repository — happy to hear your ideas!
