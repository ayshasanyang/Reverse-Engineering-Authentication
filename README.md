# Reverse-Engineering-Authentication

## Table of contents
- [Screenshots](#screenshots)
- [Description](#description)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Files-Explained](#files-explained)
- [Questions](#questions)

## Description
This project is a walkthrough of a codebase that the user can use to create a new project with NPM, Node, Passport, Sequelize, and MySQLThis project is a walkthrough of a codebase that the user can use to create a new project with NPM, Node, Passport, Sequelize, and MySQL

## Installation

1. Create a MySql db called “passport_demo” and git clone the repo
1.  Go into the config file, open config.js, and insert your personal data ie username, password etc 
1. Open terminal in your current repo and run “npm i” to install all node packages
	Npm install

```
npm packages
Bcryptjs
Express
Express-Session
MySQL2
Passport
Passport-Local
Sequelize

```

## Technologies Used
- CSS
- HTML
- JavaScript
- Node.js
- Workbench

## Screenshots
### Sign Up Form
![Sign Up](public/img/sign-up.PNG )

### Login
![Sign Up](public/img/login.PNG )

### Dashboard

![Sign Up](public/img/dashboard.PNG )

## Files-Explained

# Config
# Middleware
Middleware are functions that handle request, responses and the next middleware in the cycle usually with the signature.
```javascript
  function(req, res, next)
```

- isAuthenticated.js {This file indicates whether the current is authenticated (logged in). restricts routes that a user is not allowed to visit if not logged in. }

- config.js { Config.js file is where the database connection is set up, this file is dependent on the .env file which stores database credentials. }

- passport.js { passport is authentication middleware for Node.js, passpart.js sends a set-Cookie header that will be use to authenticate other pages. }

# Models
- index.js {  This file sets the database up and check the connection using Sequelize. Depending on which database you are using, you may need to define a different dialect.}

- user.js { user.js contains bcrypt.hash function to generate password hashing, and salt which takes in an integer of (10) as a parameter and returns a callback function with the generate salt. This makes our database secure. }

```javascript
User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
```
## Check a User Entered Password

 The bcrypt.compare() function is to compare the passworedEnteredByUser and hash against each other. It has a callback function that returns the true/false result of whether or not the two matches.
```javascript
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
```
# Routes
- api-routes.js { contains routes for signing in, logging out, and getting users specific data to be displayed client-side, this file depends on the passport.js for authentication  };

- html-routes.js { routes that check whether the user is signed in if the user already has an account and sends them to the correct Html page. This file also has isAuthenticated middleware to redirect the users to the signup page if the try to access the route without being logged in.};

- package.json { All npm packages contain a file, usually in the project root, called package. json - This file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies}

- server.js { requires packages, sets up PORT, creates express and middleware, creates routes and syncs database/logs message in terminal on successful connection to server };

## Questions
For any other questions, please send me an email at: isasanyang1986@yahoo.co.uk
