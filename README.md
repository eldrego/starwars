# Create-React-App Redux Starter Kit

[![Hound](https://img.shields.io/badge/Protected_by-Hound-a873d1.svg)](https://travis-ci.org/eldrego/react-redux-starter-kit)

## Pr0ject Specifications

### Objective
- This task is designed to provide an opportunity for you to demonstrate general JavaScript and UI development knowledge in the sense that you: write clean, structured, readable and maintainable code create simple application components and building blocks understand fetching, transforming and aggregating data from external APIs maintain a well designed application state craft a pleasant user experience


### Task
Create a small app using React that lists the names of Star Wars movies in a dropdown and the opening crawl of the selected movie below the selection along with a list of the characters that appear in that movie.

### General requirements:
- The UI should have a basic theme of black and yellow; visual design is low in the priority list
- Movie names in the dropdown to be sorted by release date from earliest to newest
- There should be no movie selected initially and the app should show the Star Wars logo instead of movie information
- The opening crawl of the selected movie should be animated, a simple scrolling marquee text would be sufficient
- Keep your application source code on a public Github repository
- Provide a live demo url (Codesandbox, Glitch, Netlify, Zeit Now, Heroku and Github Pages are good options).

### Data requirements:
- The data should be fetched online from https://swapi.dev
- Loading indicators should be shown in proper places while fetching data
- Error messages should be shown if there are any errors
- If you encounter CORS errors connecting to SWAPI, use a free online CORS proxy, like http://anyorigin.com/, for example, you can call https://swapi.dev/api/films without CORS issues using http://anyorigin.com/go?url=https://swapi.dev/api/films

### Character list requirements:
All characters that appear in that movie should be listed showing name, gender, and height in the form of a table.

Gender can be shown as an icon or abbreviation to save horizontal space.

Character list can be sorted by clicking on the table headers.
Clicking on the same header twice toggles the sort order by the field between ascending and descending.

There should also be a gender filter selection right above the list so that either all characters are listed or only the selected gender are listed.

The last row of the table should show the total number of characters currently visible on the list.

The last row should also show the sum of the heights of the characters currently visible.

The sum of heights should be shown both in cm and in feet/inches in parenthesis, for example, 170 cm (5ft/6.93in)

Please feel free to ask questions before or during working on this task and remember to share with us the Github repository and live demo urls.

This is not a test. This is a chance for us to know you better and your chance to see how Paystack engineers typically work.

After submitting, you will receive feedback as Github issues, might be asked to make some changes, also possibly create or review a pull request.

May the force be with you! :)

## Requirements

- node `8.9.0`
- npm `^6.0.1`

## Installation

Create a new project based on `react-redux-starter-kit` by doing the following:

```bash
$ git clone https://github.com/eldrego/react-redux-starter-kit.git <my-project-name>
$ cd <my-project-name>
```

Create your .env file and populate the relevant values based on the sample file .env-sample

Install dependencies

```bash
$ npm install
$ npm run start      # Compiles and launches application
```

If everything works, you should get a message indicating so. In development Application will be served on port 8080
Open the web browser to http://localhost:3000/login

## Project Structure

The project structure presented in this starter kit is outlined below. This structure is only meant to serve as a guide.

```
├── public                # Transpiled react source code
└──src                    # React-redux related files
   ├── __tests__          # Unit tests
   ├── assets             # Assests - Images, stylesheets and
   │   ├── fonts          # Custom fonts for the application
   │   ├── images         # Images
   │   └── sass           # CSS files
   ├── components         # Collections of reducers/constants/actions
   ├── layouts            # Layouts for auth pages and other pages
   ├── pages              # Collections of landing pages for navigation items
   ├── redux              # Collections of reducers/constants/actions
   │   ├── actions        # Actions
   │   ├── reducers       # Reducers
   │   ├── constants.js   # Constants file
   │   └── store.js       # Redux store instance
   ├── routes             # Route declaration for the application  - private and public routes
   └── utils              # Utitily functions used in the application
```

## Contributing

I am more than happy to accept contributions to the project. Contributions can be in the form of feedback, bug reports or even better - pull requests :)
