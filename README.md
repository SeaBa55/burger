# burger
Michigan State Bootcamp Homework assignment 13: Node Express Handlebars

## Description

This application uses an express backend to create, devour, respawn, and delete a digital burger in mySQL database "burgers_db". The app uses node, express, and express handlebars to render each burger, and interact with the user (client). 

![burgers!](./public/assets/img/Burgers!.gif)

## Table of Contents

* [Installation](#installation) 
* [License](#license) 
* [Contributors](#contributing) 
* [Tests](#tests)
* [Revisions](#Revisions) 

Revision History

## Installation

Run the app with heroku using the following link: 
> https://young-ocean-90529.herokuapp.com/


If running app locally from terminal you will need to run the following commands to get started:
> npm i

Create a `.env` file
```bash
touch .env
```

Include the following inside it:
```env
# Database host or URL default is localhost
DB_HOST='localhost'
# Database user default is root
DB_USER='root'
# Database password
DB_PASSWORD='your_password'
# Database port default is 3306
DB_PORT=3306
# Database Name of the database for the project
DB_DATABASE_NAME='database_name'
```

> node server.js

The app will be rendered to: 
>http://localhost:8080/

## License

![License](https://img.shields.io/badge/License-none-blue.svg)

## Contributing

none

## Tests

none

## Revisions

burger_v1.0 - Initial commit: Added basic README and .gitignore files.
 
burger_v1.1 - Created a basic working burger app that allows the user to add a burger, devour it, and add it back to the un-devoured section if the user wishes to eat it again.  

burger_v1.2 - Added delete button functionality for each burger that enables the user to remove each burger from burgers_db. App was built using class example, and needs to be refactored to incorporate better styling, remove reduntant or unused code, and clean-up confusing parameter names that may remain for the previous application.

burger_v1.3 - Added functionallity to add new burger to burgers_db if the user decides to eat a burger again. This ensures the burgers that have been devoured serve as a record of all burgers eaten (unless user deletes a burger from the devoured section). 

burger_v1.4 - Refactored code readability (server.js, connection.js, orm.js, burgers_controller.js, burgers.js, burgers.js).

burger_v1.5 - Re-styled burgers front end/ user interface: Added logo in jumbotron; Added a fun static background; Added card div containers along with other bootstrap components to "Add Burger", "Burger Queue", and "Burger History" sections to organize site content and improve the look and feel of the user controls.

burger_v1.6 - Added space between the devour/eat again button and the delete button that appears for each burger in Burger Queue/ History.

burger_v1.7 - Edited README.md file, adding app demo gif and deployed heroku link.  

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.