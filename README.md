# City Weather Checker

This is a simple web application that allows users to check the current weather in any city. It uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch weather data and display it in a user-friendly interface. The app shows information such as temperature, humidity, wind speed, and a weather description for the specified city.

## Features
- Enter the name of any city to get the current weather.
- Displays weather data including temperature, humidity, wind speed, and a weather icon.
- Easy-to-use interface with responsive design.

## Prerequisites
Before running the project, make sure you have the following:
- A web browser (Chrome, Firefox, etc.)
- An internet connection to fetch weather data from the OpenWeatherMap API.

## Files Structure
The project consists of the following files:
- `index.html`: The HTML structure of the application.
- `assets/css/styles.css`: CSS file that styles the webpage for a clean and modern look.
- `assets/js/main.js`: JavaScript file that handles the weather fetching and display logic.

## Steps to Run the Application

1. **Get an OpenWeatherMap API Key**
   - Go to the [OpenWeatherMap website](https://openweathermap.org/api).
   - Sign up for an account or log in if you already have one.
   - Navigate to the "API Keys" section in your account settings.
   - Copy your API key from there.

2. **Set Up the Project**
   - Create a folder on your local system to store the project files.
   - Inside the folder, create the following subfolders:
     - `assets/css/`
     - `assets/images/`
     - `assets/js/`
   - Copy the respective code into the files as described in the project.

3. **Add the API Key to `main.js`**
   Replace the `apiKey` variable in `assets/js/main.js` with your own OpenWeatherMap API key. Find this line:

   ```javascript
   const apiKey = 'YOUR_API_KEY'; // Replace this with your actual OpenWeatherMap API key
   ```

4. **Run the Application**
   - Open the folder where you saved the files.
   - Double-click the index.html file to open it in your web browser.
   - You should now be able to use the application to check the weather for any city.

## 🎯 Future Improvements

- Add support for 5-day weather forecasts.
- Enable geolocation to auto-detect user’s city.
- Improve mobile responsiveness for smaller screens.

## 🧑‍💻 Author

- Created with ❤️ by **Keval Nagariya** 
- ❤️ **https://op-city-weather-chekcer.netlify.app/**