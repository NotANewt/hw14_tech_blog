const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#comment-title').value.trim();

  const post_id = document.querySelector('#comment-post_id').value.trim();

  console.log(post_id);

  if (title) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ title, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create post');
    }
  }
};

// Event Listener for Create button
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
