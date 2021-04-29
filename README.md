# Tech Blog

## Description

This application is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.

## Deployed Application

[Tech Blog]()

## Table of Contents

  - [Acceptance Criteria](#acceptance-criteria)
  - [Dependencies](#dependencies)
  - [Questions](#questions)

## Acceptance Criteria

* When the user visits the site for the first time the are presented with the homepage, which includes existing blog posts if any have been posted. Navigation links for the homepage and the dashboard, and the option to log in.
* When the user clicks on the homepage option they are taken to the homepage.
* When the user clicks on any other links in the navigation they are prompted to either sign up or sign in.
* When the user choose to sign up they are prompted to create a username and password.
* When the user clicks on the sign-up button their credentials are saved and they're logged into the site.
* When the user revisits the site at a later time and choose to sign in they're prompted to enter their username and password.
* When the user is signed in to the site they can see navigation links for the homepage, the dashboard, and the option to log out.
* When the user clicks on the homepage option in the navigation they're taken to the homepage and presented with existing blog posts that include the post title and the date created.
* When the user clicks on an existing blog post they're presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
* When the user enters a comment and clicks the submit button while signed in the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
* When the user clicks on the dashboard option in the navigation they're taken to the dashboard and presented with any blog posts they've already created and the option to add a new blog post.
* When the user clicks on the button to add a new blog post they're prompted to enter both a title and contents for their blog post.
* When the user clicks on the button to create a new blog post the title and contents of their post are saved and they're taken back to an updated dashboard with their new blog post.
* When the user clicks on one of their existing posts in the dashboard they are able to delete or update the post and are taken back to an updated dashboard.
* When the user clicks on the logout option in the navigation they're signed out of the site.
* If the user is idle on the page for more than a set time they're automatically signed out of the site. 

## Dependencies

This application utilizes the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package, the [MySQL2](https://www.npmjs.com/package/mysql2) package, the [Sequelize](https://www.npmjs.com/package/sequelize) package, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

## Questions

Have questions or comments about this application?

- Please feel free to email me at: garzoni.webdev@gmail.com
- Or find me on GitHub at: [RevyWatson](https://github.com/RevyWatson)