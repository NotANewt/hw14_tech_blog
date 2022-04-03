const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#comment-title').value.trim();

  const blog_id = event.target.getAttribute('data-id');

  if (title && blog_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ title, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

// Event Listener for Create button
if (document.querySelector('.comment-form')) {
  document
    .querySelector('.comment-button')
    .addEventListener('click', newFormHandler);
}
