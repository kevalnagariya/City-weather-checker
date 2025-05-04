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
- `main.js`: JavaScript file that handles the weather fetching and display logic.
- `styles.css`: CSS file that styles the webpage for a clean and modern look.

## Steps to Run the Application

### Step 1: Get an OpenWeatherMap API Key
To use the weather data from OpenWeatherMap, you'll need an API key.
1. Go to the [OpenWeatherMap website](https://openweathermap.org/api).
2. Sign up for an account or log in if you already have one.
3. Navigate to the "API Keys" section in your account settings.
4. Copy your API key from there.

### Step 2: Set Up the Project
1. Create a folder on your local system to store the project files.
2. Inside the folder, create the following files:
   - `index.html`
   - `styles.css`
   - `main.js`
3. Copy the code for each respective file:
   - Paste the HTML code in `index.html`.
   - Paste the CSS code in `styles.css`.
   - Paste the JavaScript code in `main.js`.

### Step 3: Add the API Key to `main.js`
Replace the `apiKey` variable in `main.js` with your own OpenWeatherMap API key. Find this line:
```javascript
const apiKey = '8d9de1fcec7b2bac2577528ebdfbc32a';
and replace the '8d9de1fcec7b2bac2577528ebdfbc32a' string with your own API key.
```

### Step 4: Run the Application
Open the folder where you saved the files.
Double-click the index.html file to open it in your web browser.
You should now be able to use the application to check the weather for any city.