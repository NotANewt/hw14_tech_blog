# Tech Blog

![MIT License](https://img.shields.io/badge/license-MIT-green)

## Description

- Purpose of this project: A CMS-style blog where developers can publish blog posts and comment on existing posts.
- Problem(s) the app solves: Developers not having a place to share their ideas with one another.
- Languages used: HTML, CSS, JavaScript, SQL
- Brief description: A blog site where users can make their own blog posts, view posts written by other users, and comment on posts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Links](#links)

## Installation

This app requires the installation of bcrypt, connect-session-sequelize, express, dotenv, express, express-handlebars, express-session, mysql2, and sequelize to function. All are included in the package.json file and can be installed with the following input:

```bash
npm install
```

## Usage

Whe a user visits the site for the first time, they are presented with the homepage, which includes existing blog posts if any have been posted, navigation links for the homepage and the dashboard, and the option to log in.  When they click on the homepage option, they are taken to the homepage.  When they click on the dashboard option, they are presented a page where they can either log in or sign up.  If the user wishes to sign up, they can do so by entering their user name, email, and password into the form.  When they click the sign up button, their user credentials are saved and they are logged into the site.  When the revisit the site at a later time and choose to log in, they can do so by entering their email and password into the form and click the Login button to be logged into the site.  When they are signed in to the site, the user sees navigation links for the homepage, the dashboard, and the option to log out.  When they click the homepage option in the navigation, they are taken to the homepage and presented with existing blog posts that include the post title, the name of the person who created the post, and the date created.  When the user clicks on an existing blog post, and they are not logged in, they are presented with the post title, contents, post creator's username, the date of creation for that post, and any existing comments. At the top of the Comments section, it reads "You can log in to add a comment", which includes a link to the login page.  If the user clicks on an existing blog post and they are logged in, they are presented with the post title, contents, post creator's username, the date of creation for that post, an input area to enter their own comment, and any existing comments.  If the user chooses to enter a comment and click on the submit button, comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.  When the user clicks on the dashboard option, and they are not logged in, they are redirected to the login/sign up page.  If they are logged in, they are taken to their user dashboard, and are presented with any blog posts they have already created and a button to "Create A New Blog Post".  If the user has not created any posts, there is text that reads 'You have no blog posts. Click the button below to create a new one!'.  When the user clicks on the button to create a new blog post, they are prompted to enter both a title and contents for their blog post.  When they click on the Create button to create a new blog post, the title and contents of their post are saved and they are taken back to an upadted dashboard with their new blog post. When the user clicks on one of their existing blog posts in the dashboard, they are able to delete or update the blog, or delete any comment left on the blog.  When the user clicks on the button to delete a post or a comment, the user confirms they want to delete the blog or comment, then are taken back to an updateed dashboard.  When they update a blog post, they are also taken back to an updated dashboard.  When they click on the logout option in the navigation, the user is signed out of the site.  If the user is idle on the site for more than a set time, they are able to view blog posts and comments, but must log in again before they can access their dashboard, add a new post or comment, or edit or delete their own blog posts, or delete comments on their own blog posts.


### Screenshot

!["a screenshot of the app"](./img/screenshot)

## License
    
This application is licensed under the MIT license.

## Contributing

If you would like to contribute to this application, please follow Creative Contribution guidelines.

## Tests

You can test this application by entering unexpected characters into the inputs.

## Questions

If you have any questions:

- Email me: [meegan.r.anderson@gmail.com](mailto:meegan.r.anderson@gmail.com)
- Go to my github: [NotANewt](https://github.com/NotANewt)

## Links

- Here is the repo: [NotANewt/Tech Blog](https://www.github.com/NotANewt/hw14_tech_blog)
- Here is the pages: [NotANewt/pages](https://www.meegan-tech-blog.herokuapp.com/)
