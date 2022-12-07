# E-Commerce Backend

## Table of Contents
  1) [Description](#description)
  2) [Technologies](#technologies-used)
  3) [Challenges](#challenges)
  4) [Future Implementations](#future-implementations)
  5) [User Story](#user-story)
  6) [Demonstration](#demonstration)
  7) [Installation](#installation)
  8) [License](#license)

## Description
Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes.

My motivation was to build the back end for an e-commerce site. I configured a working Express.js API to use Sequelize to interact with a MySQL database.

## Technologies
* [nodejs](https://nodejs.org/en/) - to run the server in the terminal
* [mysql2](https://www.npmjs.com/package/mysql2) - database management
* [dotenv](https://www.npmjs.com/package/dotenv) - to hide sensitive user data
* [sequelize](https://sequelize.org/) - data modeling/associations
* [Postman](https://www.postman.com/) - seeing routed data

## Challenges
* Making sure all routes worked within Postman
* Using correct modeling and data types 
* Working with seeded data

## Future Implementation
* Better front-end implementation. Users could see CRUD operations on products in real time
* Additional product data

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Demonstration
[Here is a video link of the app in action](https://drive.google.com/file/d/1-7pMzBKzaf3nfYNIm47eE4nojAggsxce/view)

## Installation
* For installation onto local machine, clone provided repository.
* Use `npm init` to initalize node package manager
* Use `npm install` to install dependencies
* Use `mysql -u root -p` then enter your password to enter the MySQL shell.
* Use `SOURCE schema.sql;` inside of the MySQL shell to reset the database.
* Use `npm run seed` in the terminal to apply seeds to the database.
* Use `npm start` to initiate the server in your terminal.

## License
MIT © Krenbot