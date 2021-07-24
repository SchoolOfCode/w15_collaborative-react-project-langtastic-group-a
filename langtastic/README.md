# About Langtastic
Langtastic was created by: Muna Fidow, Ines Perez and Toby Smith and Jubair Ahmed. 

Langtastic is a web app designed to connect language learners to tutors. The platform allows users to book and manage appointments, and find a new tutor should they wish to learn a new language or switch tutors. 

![](https://www.figma.com/file/uDF5HrQbouWqzKtDLctDEb/Langtastic-Component-Tree?node-id=12%3A79)
## App Level

The app uses react router to manage the navigation between different pages of the app. More information about react-router can be found [here:](https://reactrouter.com/web/guides/quick-start)

## Home Page

The homepage shows information about learning a new language, help with finding a tutor and some reviews of the site. 
COMING SOON - log in or sign up to review/add lesson bookings!

## Dashboard

The dashboard allows the user to see any past and upcoming appointments, who they are with, and the time and data. 

## Tutor Selection

The tutor selection page allows the user to find a new tutor and book an appointment with them. 

## Appointment Confirmation

The appointment confirmation page gives the user a summary of their proposed booking before letting them confirm.  

# Components and Component Tree

[A component tree can be found in Figma here:](https://www.figma.com/file/uDF5HrQbouWqzKtDLctDEb/Langtastic-Component-Tree?node-id=0%3A1)

There are many smaller components, but the main components are:
- Navbar
- HomePage
- Dashboard
- TutorCard
- AppointmentConfirmation
- ConfirmationBox

# Dependencies
  -  "@syncfusion/ej2-react-calendars": "^19.2.46",
  - "@testing-library/react": "^11.2.7",
  - "@testing-library/user-event": "^12.8.3",
  -  "react": "^17.0.2",
  -  "react-dom": "^17.0.2",
  -  "react-icons": "^4.2.0",
  -  "react-router-dom": "^5.2.0",
  -  "react-scripts": "4.0.3",
  -  "react-star-ratings": "^2.3.0",
  -  "router": "^1.3.5",
  -  "simple-react-footer": "^1.0.2",
  -  "styled-components": "^5.3.0",
  -  "web-vitals": "^1.1.2"
  
## Dev Dependencies
  -  "@testing-library/jest-dom": "^5.14.1",
  -  "cypress": "^8.0.0",
  -  "eslint-plugin-cypress": "^2.11.3"  

# Changes made after code review

## Styling
- Alignment of content of the Hompage to the center not to the right. 
- Margin/padding added to homepage and tutor selection. 

## Testing

I used mainly used react testing library to test the routing and rendering of components onto the DOM. Some Cypress was used to practice end to end testing. 
Some examples are shown below. 

### React Testing Library
- [App level test to check correct routing](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/src/components/App/app.test.js)
- [Rendering of confirmationbox component](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/src/components/Appointment_Confirmation/confirmationbox.test.js)
- [Test using props, and checking for text content](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/src/components/NavBar/Title/title.test.js)
- [Test to check that components are visible](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/src/components/Tutorselection/Tutorcard/tutorcard.test.js)

### Cypress
- [checking that homepage renderd](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/cypress/integration/init.spec.js)
- [End to End testing for booking and appointment](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/cypress/integration/homepage.spec.js)
- [Check that the tutor data contains the correct number of entries](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/cypress/integration/tutors.spec.js)

## useReducer
As there was only one instance of state within the app, useReducer has been used once [here:](https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a/blob/natpinnock-testing-and-documentation/langtastic/src/components/Appointment_Confirmation/Confirmationbox.js) 

# How to launch the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

