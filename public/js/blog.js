const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#comment-title').value.trim();

  const blog_id = document.querySelector('#comment-blog_id').value.trim();

  console.log(blog_id);

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
      alert('Failed to create blog');
    }
  }
};

// Event Listener for Create button
if (document.querySelector('.new-blog-form')) {
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
}
