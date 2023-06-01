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

4. _will be updated..._

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
5. _will be updated_

## Tools

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Postman](https://www.postman.com/)
3. [Nodemon](https://www.npmjs.com/package/nodemon)

## Documentation

### API Documentation

- [API Documentation](API-Documentation.md)

## Development API

- URL : https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app/
- Documentation : https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app/docs

## Todos

- [x] Initialize Project
- [x] Install Dependencies
- [x] Create Server
- [x] Connect with Firestore
- [x] Connect with Cloud Storage
- [x] Authentication with Firebase
  - [x] Token Verification (Middleware to Call API)
- [ ] Journal API
  - [ ] Get All Journals
  - [ ] Get All Journals by User ID
  - [ ] Get Journal with Correct ID
  - [ ] Get Journal with Invalid ID
  - [ ] Add Journal with Complete Data
  - [ ] Add Journal without Content
- [ ] Quotes API
  - [ ] Get Random Quote of The Day
- [ ] Users API
  - [x] Get User Details
  - [x] Add User (Sign Up)
  - [ ] Store User Image
  - [x] Update User
- [ ] If ML Model on Cloud
  - [ ] Predict Data with Tensorflow.js
- [x] Deploy Development API to Cloud Run
- [ ] Testing and Debugging API
- [x] Deploy Development API w/ Auth to Cloud Run
- [ ] Testing and Debugging Authentication
- [ ] Deploy to Production
- [ ] Create Documentation
- [ ] Testing and Debugging Documentation
- [ ] _will be updated..._

## Installation

This project using [NodeJS](https://nodejs.org/en/) v18.16.0 and [PNPM](https://pnpm.io/).

1. Clone this repository

   ```bash
   git clone https://github.com/daily-cloud/daily-cloud-be.git
   ```

2. Install dependencies

   ```bash
   # go to project directory
   cd daily-cloud-be

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

   # if you want to run the server with nodemon
   pnpm dev # or npm run dev or yarn dev
   ```

## Working with branches

1. Clone this repository

   ```bash
   git clone https://github.com/daily-cloud/daily-cloud-be.git
   ```

2. Move to the project directory

   ```bash
   cd daily-cloud-be
   ```

3. Switch to the 'development' branch

   ```bash
   git checkout development
   ```

4. Create a new branch from the 'development' branch

   ```bash
   git checkout -b <branch-name> development
   ```

5. Pull the latest changes from the 'development' branch to stay up to date

   ```bash
   git pull origin development
   ```

6. Make some changes and commit

   ```bash
   git add .
   git commit -m "commit message"
   ```

7. Push to the branch

   ```bash
   git push origin <branch-name>
   ```

8. Create a pull request to the 'development' branch
9. Wait for the pull request to be reviewed and merged

## Author

- C141DSX0721 – Fahrul Zaman – Bale Bandung University
- C032DKY4321 – Maya Septiani Br Simbolon – Harapan Bangsa Institute of Technology

## Credits

- _will be updated soon..._

## Thank You

[back to top](#daily-cloud-backend)
