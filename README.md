# API Endpoint + React UI Coding Challenge

## Prompt
Build an API endpoint in PHP or NodeJS that will take a set of Latitude & Longitude coordinates, and return a list of properties within 20 miles of those coordinates. 

Structure the API application in a way that another developer can get up and running with it quickly. You may use any 3rd party libraries or APIs you feel are necessary, just make sure they are documented.

Bonus Points for:
● Providing a UI for conducting the searches
● Allow the API to accept a string address
● Unit Testing your code


## To Run:
npm install
npm start
open localhost:8080

input latitude/longitude values, for eg.
lat = 37.805576,
long = 122.422947

## Screenshot
![picture alt](/screenshot.jpg)

## About
I coded an api endpoint using Node/Express that takes a latitude/longitude value and returns the property listings that are within 20 miles using the Haversine formula, which is code I used from Stack Overflow. The front end is built on React.js, which is babelified to Javascript using webpack. 





