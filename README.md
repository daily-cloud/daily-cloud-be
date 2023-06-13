# Daily Cloud Backend

## Brief Description

Daily Cloud Backend is an Application Programming Interface (API) used by the Daily Cloud Mobile App.

There are services provided by Daily Cloud Backend

1. Authenticating User

   Daily Cloud Backend Handles user authentication for the Daily Cloud Mobile App.

2. Providing Journal Entries

   Daily Cloud Backend enables users to store their daily journal entries through the API

3. Providing Quotes of The Day

   Daily Cloud Backend also offers a service to provide quotes of the day to the Daily Cloud Mobile App

4. Providing Articles

   Daily Cloud Backend enable also offers a service to provide article to the Daily Cloud Mobile App

## Table of Contents

- [Daily Cloud Backend](#daily-cloud-backend)
  - [Brief Description](#brief-description)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Tools](#tools)
  - [Documentation](#documentation)
    - [API Documentation](#api-documentation)
  - [Development API](#development-api)
  - [Todos](#todos)
  - [Installation](#installation)
  - [Working with branches](#working-with-branches)
  - [Author](#author)
  - [Credits](#credits)
  - [Thank You](#thank-you)

## Tech Stack

1. [NodeJS](https://nodejs.org/en)
2. [ExpressJS](https://expressjs.com/)
3. [Docker](https://www.docker.com/)
4. [Google Cloud Platform](https://cloud.google.com/)
   - [Google Cloud Run](https://cloud.google.com/run)
   - [Firebase Authentication](https://firebase.google.com/products/auth)
   - [Firestore](https://cloud.google.com/firestore)
   - [Google Cloud Storage](https://cloud.google.com/storage)

## Tools

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Postman](https://www.postman.com/)
3. [Nodemon](https://www.npmjs.com/package/nodemon)

## Documentation

### API Documentation

- [API Documentation](API-Documentation.md)

## Development API

- URL : https://daily-cloud-e5zoegfyha-et.a.run.app/
- Documentation : https://daily-cloud-e5zoegfyha-et.a.run.app/docs

## Todos

- [x] Initialize Project
- [x] Install Dependencies
- [x] Create Server
- [x] Connect with Firestore
- [x] Connect with Cloud Storage
- [x] Authentication with Firebase
  - [x] Token Verification (Middleware to Call API)
- [x] Journal API
  - [x] Get All Journals
  - [x] Get All Journals filter by month and year
  - [x] Check Today's Journal
  - [x] Get Journal by ID
  - [x] Add New Journal
- [x] Articles API
  - [x] Get All Articles
  - [x] Get Article by ID
- [x] Quotes API
  - [x] Get Random Quote of The Day
- [x] Users API
  - [x] Get User Details
  - [x] Add User (Sign Up)
  - [x] Update User
- [x] Deploy ML Model
  - [x] Deploy NLP Model to Cloud Run with Flask [here](https://github.com/daily-cloud/daily-cloud-predict-api)
- [x] Deploy Development API to Cloud Run
- [ ] Testing and Debugging API
- [ ] Deploy to Production
- [x] Create Documentation

## Installation

### Run on Local Environment

This project using [NodeJS](https://nodejs.org/en/) v18.16.0 and [PNPM](https://pnpm.io/)

1. Clone this repository

   ```bash
   git clone https://github.com/daily-cloud/daily-cloud-be.git

   cd daily-cloud-be
   ```

2. Install dependencies

   ```bash
   # install dependencies
   pnpm install
   # if you are using npm or yarn
   rm pnpm-lock.json
   # then install dependencies
   npm install
   # or
   yarn install
   ```

3. Run the server

   ```bash
   pnpm start # or npm start or yarn start
   # or
   pnpm dev # or npm run dev or yarn dev
   ```

### Run on Docker

Make sure you have Docker installed on your local computer

1. Clone this repository

   ```bash
   git clone https://github.com/daily-cloud/daily-cloud-be.git
   cd daily-cloud-be
   ```

2. Build docker image

   ```bash
   docker build -t daily-cloud-be .
   ```

3. Run the image
   ```bash
   docker run -p 8080:8080 --name daily-cloud-be-app daily-cloud-be
   ```

## Author

- [C141DSX0721 – Fahrul Zaman – Bale Bandung University](https://www.linkedin.com/in/fhrlzmn/)
- [C032DKY4321 – Maya Septiani Br Simbolon – Harapan Bangsa Institute of Technology](https://www.linkedin.com/in/mayaseptianibrsimbolon/)

## Thank You

- Bangkit Academy led by Google, GoTo, & Traveloka
- Daily Cloud Capstone Team
- Dicoding Indonesia
- Coursera
- Google Cloud Platform
- Google Cloud Skill Boost

## [back to top](#daily-cloud-backend)
