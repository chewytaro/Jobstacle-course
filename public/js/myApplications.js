const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#job-name').value.trim();
    const salary = document.querySelector('#salary').value.trim();
    const description = document.querySelector('#job-desc').value.trim();
    const status = document.querySelector('#status').value.trim();
  
    if (name && salary && description && status) {
      const response = await fetch(`/api/jobs`, {
        method: 'POST',
        body: JSON.stringify({ name, salary, description, status }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/myApplications');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/jobRoutes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/myApplications');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  