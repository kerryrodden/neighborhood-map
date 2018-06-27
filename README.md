# Neighborhood Map Project

This code is for a project from [Udacity's Front-End Developer nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

The goal of the project was to use React, the Google Maps API, plus data from a third-party API, to create a web application from scratch. The app should display both a filterable list of results and a map view of those results, and also be responsive, accessible, and progressive.

## How to run

This app was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app), and can be run using the standard processes for such apps:

1. Download or clone this repository
2. Install all project dependencies with `npm install`
3. *Development Mode:* start the development server with `npm start`
4. *Production Mode:* create a production build with `npm run build`, which can then be run by pointing a web server at the `build` directory (for example, `serve -s build`) and opening it in a browser.

Note that the offline functionality of the app is only available in Production Mode. This caches the app boilerplate using the service worker provided with Create React App. The API data and map data are only shown when there is a network connection, to avoid violating any terms of service.

## Additional resources used
- [react-google-maps](https://tomchentw.github.io/react-google-maps/)
- [DataSF API](https://datasf.org/opendata/)

## Contributing

This was a course project and was put onto Github for grading, so unfortunately I cannot accept contributions. Thank you!