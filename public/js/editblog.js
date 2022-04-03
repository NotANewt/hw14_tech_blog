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
      alert('Failed to create blog');
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
      alert('Failed to delete blog');
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
      alert('Failed to create blog');
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
      alert('Failed to delete blog');
    }
  }
};

// Event Listener for Create Post button
if (document.querySelector('#createBlog')) {
  document
    .querySelector('#createBlog')
    .addEventListener('click', createButtonHandler);
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
    .querySelector('#updateBlog')
    .addEventListener('click', updateButtonHandler);
}

// Event Listener for Delete Comment button
if (document.querySelector('#deleteComment')) {
  document
    .querySelector('#deleteComment')
    .addEventListener('click', delCommentButtonHandler);
}
