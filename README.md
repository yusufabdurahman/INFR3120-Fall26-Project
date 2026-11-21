# StudyHive (INFR3120 Fall26 Project, Part 1: First Release)

StudyHive is a web app where university students create and find study sessions (course, topic, location, date/time, capacity). This is the first release.

Live site: https://infr3120-fall26-project-3h55.onrender.com

Demo video: (paste your YouTube link here)

GitHub repository: https://github.com/yusufabdurahman/INFR3120-Fall26-Project

## Features in this release

Landing page with the site name and an original team logo (`public/images/logo.svg`)

Hero button "Create a Study Session" opens a form that saves to MongoDB Atlas

Table on the landing page listing all open study sessions

## Tech stack

Node.js, Express (project made with express-generator, EJS view engine), MongoDB Atlas with Mongoose

## Run locally

Step 1: Run `npm install`

Step 2: Copy `.env.example` to `.env` and put in your Atlas connection string (never commit `.env`)

Step 3: Run `npm start`, then open http://localhost:3000

## Deploy (Render)

Step 1: Push the repo to GitHub

Step 2: On Render choose New, then Web Service, and connect the repo

Step 3: Set the build command to `npm install` and the start command to `npm start`

Step 4: Add the environment variable `MONGODB_URI` in Render's Environment tab

Step 5: In Atlas under Network Access, allow access from Render (0.0.0.0/0 is fine for a course project)

## Project structure

`app.js` is the Express setup, MongoDB connection and routes

`bin/www` starts the server (from express-generator)

`models/session.js` is the Mongoose schema for a study session

`routes/index.js` is the landing page that lists sessions

`routes/sessions.js` is the create form and save

`views/` holds the EJS templates (`partials/` holds the header and footer)

`public/` holds the CSS and logo

## Code sources and citations

`bin/www`, the middleware setup in `app.js`, and `views/error.ejs` are from the express-generator template (Express team, https://expressjs.com/en/starter/generator.html), which is allowed as it is the required project starter.

Express, EJS and Mongoose patterns follow the course lectures.

The logo is original artwork made by our team. No external images or logos were used.

No other external code was used. (Add any extra sources here, with author and link.)

## Team contributions

Isaiah Olokude (Backend and deployment)

- Created the express-generator project, `app.js` and `bin/www`
- Set up MongoDB Atlas, `.env`/`.env.example` and `.gitignore`
- Wrote the Mongoose model `models/session.js`
- Built the create route `routes/sessions.js` and the form `views/create.ejs`
- Deployed the site on Render

Yusuf Abdurahman (Frontend and docs), GitHub: yusufabdurahman

- Built the landing page `views/index.ejs` with the sessions table
- Wrote `routes/index.js`, which loads and shows open sessions
- Made the header and footer partials
- Styled the site with `style.css`
- Drew `logo.svg`
