// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#blog-title').value.trim();
//   const contents = document.querySelector('#blog-desc').value.trim();

//   if (title && contents) {
//     const response = await fetch(`/api/blogs`, {
//       method: 'POST',
//       body: JSON.stringify({ title, contents }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create blog');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete blog');
//     }
//   }
// };

// const updateButtonHandler = async (event) => {
//   console.log('I clicked the update button');
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'PUT',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to update blog');
//     }
//   }
// };

// document
//   .querySelector('.new-blog-form')
//   .addEventListener('submit', newFormHandler);

// // if statement to make sure there are blogs to add delete buttons to before adding event listeners
// let blogList = document.querySelector('.blog-list');
// let deleteBtn = document.getElementById('delete-btn');
// let updateBtn = document.getElementById('update-btn');

// if (blogList) {
//   deleteBtn.addEventListener('click', delButtonHandler);
//   updateBtn.addEventListener('click', updateButtonHandler);
// }
