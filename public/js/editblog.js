const createButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const contents = document.querySelector('#blog-desc').value.trim();

  if (title && contents) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Get the snackbar DIV
      var x = document.getElementById('snackbar');

      x.innerHTML = 'Failed to create blog.';

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

const delButtonHandler = async (event) => {
  if (!confirm('Are you sure you want to delete your post?')) {
    return;
  }
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Get the snackbar DIV
      var x = document.getElementById('snackbar');

      x.innerHTML = 'Failed to delete blog.';

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

const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const contents = document.querySelector('#blog-desc').value.trim();
  const id = event.target.getAttribute('data-id');

  if (title && contents) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Get the snackbar DIV
      var x = document.getElementById('snackbar');

      x.innerHTML = 'Could not update blog post.';

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

const delCommentButtonHandler = async (event) => {
  if (!confirm('Are you sure you want to delete this comment?')) {
    return;
  }
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      // Get the snackbar DIV
      var x = document.getElementById('snackbar');

      x.innerHTML = 'Could not delete blog.';

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

// Event Listener for Create Post button
if (document.querySelector('#createBlog')) {
  document
    .querySelector('.blog-form')
    .addEventListener('submit', createButtonHandler);
}

// Event Listener for Delete Post button
if (document.querySelector('#deleteBlog')) {
  document
    .querySelector('#deleteBlog')
    .addEventListener('click', delButtonHandler);
}

// Event Listener for Update Post button
if (document.querySelector('#updateBlog')) {
  document
    .querySelector('.blog-form')
    .addEventListener('submit', updateButtonHandler);
}

// Event Listener for Delete Comment button
if (document.querySelector('#deleteComment')) {
  document
    .querySelector('#deleteComment')
    .addEventListener('click', delCommentButtonHandler);
}
