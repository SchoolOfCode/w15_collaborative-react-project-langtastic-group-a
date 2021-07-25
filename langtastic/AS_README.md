# Langtastic - Learning a new language

This application was created by Muna Fidow, Ines Perez and Toby Smith and Jubair Ahmed to make learing a new laguage an easier process for people.
Langtastic is a web app that connects language learners with tutors. The platform allows users to book and manage appointments, and find a new tutor providing a wide range of language selection.  
The user can switch between tutors unser TutorSelection and can view their past and they are able to see past and upcoming booking.

## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w15_collaborative-react-project-langtastic-group-a.git
```

Go to the project directory

```bash
  cd langtastic
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Components

Using React Developers Tools on Google Chrome you can inspect and see each component in the Langastic App.

![image](https://user-images.githubusercontent.com/81432036/126900751-2b8a5a26-a313-417c-9a10-79e0d5f15044.png)

All components are located inside the components folder inside src folder. There are some smaller component that are nested inside other components, but the main used components are:

- Homepage
- Dashboard
- Navbar
- Appointment confirmation
- Confirmation Box
- Tutor selection
- Tutor card

[Please see a diagram of the component tree here](https://www.figma.com/file/uDF5HrQbouWqzKtDLctDEb/Langtastic-Component-Tree?node-id=0%3A1)

A libs folder is also used where all the tutordata information JS object is kept.

### App

This is the main component of the app. React router is used to navigate between the different pages of the app. For a guige on how to user React router you can start by reading [this article](https://medium.com/@mareena_codes/a-simple-guide-to-using-react-router-aecbf2410a76).

## Pages

### Homepage

The homepage includes:

- information about learning a new language
- information about the Langtastic App
- help and extra info about different tutors available
- website testimonials and reviews

![image](https://user-images.githubusercontent.com/81432036/126901444-77431bbf-ecaf-4bed-afc4-b64956e7af39.png)

### Dashboard

The dashboard page allows the user to see any upcoming bookings and Past bookings with a date and time displayed and also tutor information.

![image](https://user-images.githubusercontent.com/81432036/126901542-eb01cef8-7659-4849-b591-cfcf2aedeb9a.png)

### Tutor Selection

The tutor selection page allows the user to select from a list of tutors speciliased in teaching a leanguage and the ability to book an appointment.

![image](https://user-images.githubusercontent.com/81432036/126901615-c767678b-bbf6-4a63-b058-14e4df953802.png)

### Appointment Confirmation

The appointment confirmation page gives the user a summary of their proposed booking before letting them confirm.

![image](https://user-images.githubusercontent.com/81432036/126901660-72483d8e-fa4c-4806-a3db-daa148c88ce2.png)

# Dependencies

- "@syncfusion/ej2-react-calendars": "^19.2.46",
- "@testing-library/react": "^11.2.7",
- "@testing-library/user-event": "^12.8.3",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-icons": "^4.2.0",
- "react-router-dom": "^5.2.0",
- "react-scripts": "4.0.3",
- "react-star-ratings": "^2.3.0",
- "router": "^1.3.5",
- "simple-react-footer": "^1.0.2",
- "styled-components": "^5.3.0",
- "web-vitals": "^1.1.2"
