const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        document.location.replace('/api/jobs');
      } else {
        alert('Failed to delete job.');
      }
    }
  };
  
  document
    .querySelector('.job-list')
    .addEventListener('click', delButtonHandler);
  