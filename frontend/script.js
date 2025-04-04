async function fetchApps() {
  const res = await fetch('/applications/');
  const data = await res.json();
  const tableBody = document.querySelector('#appsTable tbody');
  const countSpan = document.querySelector('#count');
  tableBody.innerHTML = '';
  countSpan.textContent = data.length;

  data.forEach(app => {
    const row = `<tr>
      <td>${app.id}</td>
      <td>${app.company}</td>
      <td>${app.job_title}</td>
      <td>${app.location}</td>
      <td><a href="${app.application_link}" target="_blank">View</a></td>
      <td>${app.status}</td>
      <td>${app.priority}</td>
      <td>${new Date(app.date_applied).toLocaleString()}</td>
      <td>
        <button onclick="editApp(${app.id})" title="Edit">✏️</button>
        <button onclick="deleteApp(${app.id})" title="Delete" style="color:red;">&times;</button>
      </td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

document.getElementById('appForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const appId = document.getElementById('appId').value;
  const payload = {
    company: document.getElementById('company').value,
    job_title: document.getElementById('jobTitle').value,
    location: document.getElementById('location').value,
    application_link: document.getElementById('applicationLink').value,
    status: document.getElementById('status').value,
    priority: document.getElementById('priority').value,
  };

  if (appId) {
    await fetch(`/applications/${appId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } else {
    await fetch('/applications/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  }

  document.getElementById('appForm').reset();
  document.getElementById('appId').value = '';
  fetchApps();
});

async function deleteApp(id) {
  await fetch(`/applications/${id}`, {
    method: 'DELETE'
  });
  fetchApps();
}

async function editApp(id) {
  const res = await fetch(`/applications/${id}`);
  const app = await res.json();

  document.getElementById('appId').value = app.id;
  document.getElementById('company').value = app.company;
  document.getElementById('jobTitle').value = app.job_title;
  document.getElementById('location').value = app.location;
  document.getElementById('applicationLink').value = app.application_link;
  document.getElementById('status').value = app.status;
  document.getElementById('priority').value = app.priority;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

fetchApps();
