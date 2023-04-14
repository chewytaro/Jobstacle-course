document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector('#logout');
  const backButton = document.querySelector('#back');

  if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setTimeout(() => {
          document.location.replace('/login');
        }, 500);
      } else {
        alert(response.statusText);
      }
    });
  }

  if (backButton) {
    backButton.addEventListener('click', () => {
      document.location.replace('/welcome');
    });
  }
});