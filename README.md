# Letterboxd Clone (Client and Customer Web App)

This is a web application based on Letterboxd, uses primarly JavaScript both on the frontend and backend. Data about movies and casts are stored on local storage deployed on Heroku. The app is a personal project which also a part of my coding bootcamp assignment, where the aim was to explore and dive deeper into ReactJS. You can find more about the stack <a href="#stack">here</a>.

## Key Features

### Admin Web App
The admin side is used as a CMS (Content Management System) where a registered admin has access to:
* Read list of movies and/or genres
* Read movie details containing cast name and images
* Create new list of movies and/or genres
* Edit movies
* Delete movies and/or genres
* Register new admin

### Customer Web App
The customer side allows non-logged in user to see all list of movies and see each movie in detail.

## Motivation

It is a work in progress, however this project displays:
* The ability to write JSX in both functional and class components
* Multiple fetch calls in different components
* Manipulating dynamically added elements to the page
* Event + Error handling
* Creating, updating, and setting information to a local database

## Demo

### Admin Web App
Here is a working live demo for the [_admin web app_](https://letterboxd-project-cms.web.app/). 
Login details:
- E-mail: admin@outlook.com
- Password: 12345

https://user-images.githubusercontent.com/108170309/204289440-9f4f0f02-69a8-4af6-b5a7-455d00d4b295.mp4

### Customer Web App
Here is a working live demo for the [_customer web app_](https://letterboxd-project-client.web.app/) (no sign in required).

https://user-images.githubusercontent.com/108170309/204289528-8b3f3990-9e1b-4358-8485-edcd83ecc5ce.mp4

## Stack
<a name="stack"></a>

### Frontend
* [React](https://reactjs.org/) to compose the UI
* [React Router](https://reactrouter.com/) to manage the routes
* [React Redux](https://react-redux.js.org/) to manage and update application state
* [Bootstrapped](https://react-bootstrap.github.io/) using [create react app](https://github.com/facebook/create-react-app) to help with the styling and accessibility
* [Firebase](https://firebase.google.com/) to host the deployed app
* [Vite](https://vitejs.dev/) to improve bundling and development

### Backend
* [NodeJS](https://nodejs.org/en/) to run the server
* [Express JS](http://expressjs.com/) to manage HTTP requests and responses
* [PostgreSQL](https://www.postgresql.org/) server to manage the data fetching declaratively

## To-do(s)
Since this is in an early stage of development, the customer side web-app is still missing the following features:
* Add register & sign in feature so that only logged in user can access the app
* No search features exist
* Feature for users to rate and review movies that they've seen just like original Letterboxd
