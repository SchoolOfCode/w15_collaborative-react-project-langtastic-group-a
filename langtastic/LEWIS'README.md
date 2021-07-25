# Testing and Documentation

So after reading through the code and loading up the page in React, i am happy to say that i feel that the aim of this project is to find language tutors around and book them in for a session. 

The files are organized within a larger folder called 'Langtastic', inside of this folder is a 'src' folder which contains all of the components for the react file, the libs, and the utils, which are needed to run the react successfully.

Inside of the components folder are a list of different folders each with more nested component folders, it did confuse me at first to read because im not sure whether it is the given thing to do, but once i understood why they were there it made a bit more sense

## Using the React Hook:

When it comes to using React hooks, i found it more suited to use the reducer hook, this is an alternative to useState.

In this code, i used it for the [ConfirmationBox.js](langtastic\src\components\Appointment_Confirmation\Confirmationbox.js) with the two different states being "yes" and "no"

## Testing:

As part of this checkpoint challenge we were given the task to test the logic and the components of this project, which was created by another group.

Firstly, i focused on rendering the components and making sure the test passed which showed that it correctly rendered on the page. This is a pretty simple test but a good base to start on before i delved into the more advanced tests.

Secondly, after rendering, i checked some of the props within some of the components to see if they would return the value that i gave them.

### Test files for Components:

**App**
[Click here](langtastic\src\components\App\index.test.js)

**Appointment_confirmation:**
[Click here](langtastic\src\components\Appointment_Confirmation)

**Dashboard:**
[Click here](langtastic\src\components\Dashboard\index.js)

- **Booking information:**

    - **Date & Time:**
    [Click here](langtastic\src\components\Dashboard\BookingInformation\DateAndTime\dateandtime.test.js)

    - **TutorInformation:**
    [Click here](langtastic\src\components\Dashboard\BookingInformation\TutorInformation\tutorinformation.test.js)



**NavBar:**
[Click here](langtastic\src\components\NavBar\NavBar.test.js)

**SignIn:**
[Click here](langtastic\src\components\SignIn\signin.test.js)

**SignUp:**
[Click here](langtastic\src\components\SignUp\signup.test.js)