# burger
Michigan State Bootcamp Homework assignment 13: Node Express Handlebars

## Description

This application uses an express backend to create, devour, respawn, and delete a digital burger in mySQL database "burgers_db". The app uses node, express, and express handlebars to render each burger, and interact with the user (client). 

![note_taker](./public/assets/img/Note_Taker.gif)

## Table of Contents

* [Installation](#installation) 
* [License](#license) 
* [Contributors](#contributing) 
* [Tests](#tests)
* [Revisions](#Revisions) 

Revision History

## Installation

Run the app with heroku using the following link: 
> https://salty-dawn-62571.herokuapp.com/

If running app locally from terminal you will need to run the following commands to get started:
> npm i

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

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.