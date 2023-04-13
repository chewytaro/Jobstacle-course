
const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#job-name').value.trim();
  const salary = document.querySelector('#salary').value.trim();
  const description = document.querySelector('#job-desc').value.trim();
  const status = document.querySelector('#status').value.trim();
  const tag = document.querySelector('#job-tag').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  if (title && salary && description && status && tag ) {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, salary, description, status, tag }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/api/jobs');
    } else {
      alert('Failed to updatejob');
    }
  }
};
document
  .querySelector('.edit-project-form')
  .addEventListener('submit', editFormHandler);