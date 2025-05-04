// Store the API key in a separate variable for easy management
const apiKey = '8d9de1fcec7b2bac2577528ebdfbc32a';

// Handle the button click event when the "Get Weather" button is clicked
document.getElementById('getWeatherBtn').addEventListener('click', async () => {
  
  // Get the value of the city input field and trim any extra spaces
  const city = document.getElementById('city').value.trim();
  
  // Get references to the result container and loading indicator
  const resultContainer = document.getElementById('result');
  const loadingContainer = document.getElementById('loading');
  
  // Show loading indicator and clear any previous results
  loadingContainer.style.display = 'block'; // Show the loading indicator
  resultContainer.innerHTML = ''; // Clear the previous result

  // Check if the city input is empty, and handle it if so
  if (!city) {
    loadingContainer.style.display = 'none'; // Hide loading indicator
    resultContainer.textContent = 'Please enter a city name.'; // Show message for missing input
    return; // Exit the function if city is empty
  }

  // Construct the API URL dynamically using the city name and API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    // Fetch the weather data from the OpenWeatherMap API
    const response = await fetch(apiUrl); // Make the API request
    const data = await response.json(); // Parse the JSON response

    // Hide the loading indicator after fetching data
    loadingContainer.style.display = 'none'; // Hide the loading spinner

    // Check if the response is successful (status code 200)
    if (data.cod === 200) {
      // Display weather data in the result container if the city is found
      resultContainer.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p> <!-- Display city name and country -->
        <p class="weather-description">${data.weather[0].description}</p> <!-- Weather description -->
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" /> <!-- Weather icon -->
        <p class="temperature">${data.main.temp}°C</p> <!-- Temperature in Celsius -->
        <p>Humidity: ${data.main.humidity}%</p> <!-- Humidity percentage -->
        <p>Wind Speed: ${data.wind.speed} m/s</p> <!-- Wind speed -->
      `;
    } else {
      // If city is not found, show an error message
      resultContainer.textContent = 'City not found. Please try again.';
    }
  } catch (error) {
    // Handle any errors that occur during the fetch request
    console.error('Error fetching weather:', error); // Log error to console
    resultContainer.textContent = 'Unable to retrieve weather data.'; // Show error message to the user
    loadingContainer.style.display = 'none'; // Hide the loading indicator if there's an error
  }
});
