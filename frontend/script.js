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
    </tr>`;
    tableBody.innerHTML += row;
  });
}

document.getElementById('appForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const company = document.getElementById('company').value;
  const job_title = document.getElementById('jobTitle').value;
  const location = document.getElementById('location').value;
  const application_link = document.getElementById('applicationLink').value;
  const status = document.getElementById('status').value;
  const priority = document.getElementById('priority').value;

  await fetch('/applications/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, job_title, location, application_link, status, priority })
  });

  document.getElementById('appForm').reset();
  fetchApps();
});

fetchApps();
