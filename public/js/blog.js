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
      // Get the snackbar DIV
      var x = document.getElementById('snackbar');

      x.innerHTML = 'Failed to create comment.';

      // Add the "show" class to DIV
      x.className = 'show';

      // After 3 seconds, remove the show class from DIV and clear inner HTML
      setTimeout(function () {
        x.className = x.className.replace('show', '');
        x.innerHTML = '';
      }, 3000);
    }
  }
};

// Event Listener for Create button
if (document.querySelector('.comment-form')) {
  document
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler);
}
