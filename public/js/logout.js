const logout = async () => {
  console.log('Logout function called');

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('Logout successful');
    // Wait for a short time before redirecting to ensure session is destroyed
    setTimeout(() => {
      document.location.replace('/');
    }, 500);
  } else {
    console.log('Logout failed');
    alert(response.statusText);
  }
};
