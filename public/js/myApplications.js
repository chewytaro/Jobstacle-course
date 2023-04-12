const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#job-name').value.trim();
    const salary = document.querySelector('#salary').value.trim();
    const description = document.querySelector('#job-desc').value.trim();
    const status = document.querySelector('#status').value.trim();
  
    if (title && salary && description && status) {
      const response = await fetch(`/api/jobs`, {
        method: 'POST',
        body: JSON.stringify({ title, salary, description, status }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/api/jobs');
      } else {
        alert('Failed to create job');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  