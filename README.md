# StudyHive (INFR3120 Fall26 Project, Part 1: First Release)

StudyHive is a web app where university students create and find study sessions
(course, topic, location, date/time, capacity). This is the first release.

**Live site:** _(paste your Render URL here after deploying)_
**Demo video:** _(paste your YouTube link here)_

## Features in this release
- Landing page with site name and original team logo (`public/images/logo.svg`)
- Hero button "Create a Study Session" -> form -> saved in MongoDB Atlas
- Table on the landing page listing all open study sessions

## Tech stack
Node.js, Express (project made with express-generator, EJS view engine), MongoDB Atlas with Mongoose.

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env` and put in your Atlas connection string (never commit `.env`)
3. `npm start`, then open http://localhost:3000

## Deploy (Render)
1. Push the repo to GitHub.
2. On Render: New > Web Service > connect the repo.
3. Build command `npm install`, start command `npm start`.
4. Add the environment variable `MONGODB_URI` in Render's Environment tab.
5. In Atlas > Network Access, allow access from Render (0.0.0.0/0 is fine for a course project).

## Project structure
- `app.js` - Express setup, MongoDB connection, routes
- `bin/www` - server start (from express-generator)
- `models/session.js` - Mongoose schema for a study session
- `routes/index.js` - landing page (lists sessions)
- `routes/sessions.js` - create form and save
- `views/` - EJS templates (`partials/` hold header and footer)
- `public/` - CSS and logo

## Code sources and citations
- `bin/www`, the middleware setup in `app.js`, and `views/error.ejs` are from the
  **express-generator** template (Express team, https://expressjs.com/en/starter/generator.html),
  which is allowed as it is the required project starter.
- Express/EJS/Mongoose patterns follow the course lectures.
- The logo is original artwork made by our team. No external images or logos were used.
- No other external code was used. _(Add any extra sources here, with author and link.)_

## Team contributions
See `INFR3120_Part1_Project_Idea_and_Contributions.docx` in this repository.
