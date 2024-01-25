# Weather API Webpage 
This application is a webpage, created with the JavaScript framework Vue JS, for the purpose of consuming the openweathermap.org API. For the sake of simplicity, all zipcodes are assumed to be within the United States. By using the search bar, 
## NOTE
The application uses a constant called **API_KEY** inside the WeatherServices class within the services package. Currently it is set to *"Your API Key here!"*. To have the application launch successfully, you must visit https://home.openweathermap.org/users/sign_up to get a free api key and replace the constant with your own.
## Instructions
* Navigate to the Weather tab
* Enter user's zipcode into the search bar and click "Get Weather"
* The application outputs the user's:
    * City
    * Latitude
    * Longitude
    * Temperature
    * Adjusted temperature
    * An icon depicting the current weather
    * A weather widget from the openweathermap.org website, listing the current temperature and weather, as well as the weeks forecast for the user's city
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
