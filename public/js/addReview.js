const reviewFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#new-review').value.trim();
    const id = event.target.getAttribute('data-id');

    if (content) {
        const response = await fetch(`/api/jobs/${id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#review-form').addEventListener('submit', reviewFormHandler);