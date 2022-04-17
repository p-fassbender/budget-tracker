# Budget Tracker PWA

The aim of this project was to update an existing budget tracker application to allow for offline access and functionality

## Table of Contents
[Technologies Used](#technologies-used) <br>
[Installation](#installation) <br>
[Usage](#use) <br>
[Testing](#tests) <br>
[Media](#media) <br>
[Questions](#questions) <br>

## Technologies Used
* html
* javascript
* express
* mongoose
* mongoDB

with a focus on using indexedDb alongside a service worker to create a PWA

---

## Installation
Navigate to the root directory in the terminal and initialize the project with **npm install** to install all the proper node module dependencies.

---

## Use
Navigate to the root directory in the terminal and type **npm start** to run the project

Navigate to http://localhost:3001/ in your browser

---

## Tests
There are no formal tests for this project

---

## Media
![Screenshot 2022-04-17 at 18-42-17 Budget Tracker](https://user-images.githubusercontent.com/36012762/163736747-d886ede4-6a17-4c36-ada8-c99873ff96fa.png)


The following link is to this project's github repository
https://github.com/p-fassbender/budget-tracker

The following link is to this project's live website
https://tranquil-garden-04489.herokuapp.com/

---

## Questions
Any questions feel free to contact me via [my github](https://github.com/p-fassbender) or by sending me an email at fassbenderp0551@gmail.com.

---

## USER STORY
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

## ACCEPTANCE CRITERIA
GIVEN a budget tracker without an internet connection
* WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
* WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
