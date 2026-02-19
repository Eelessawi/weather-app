// 1. Grab the DOM Elements (Named clearly!)
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityDisplay = document.getElementById("city-name");
const tempDisplay = document.getElementById("temperature");
const conditionDisplay = document.getElementById("condition");

// 2. The Listener
searchBtn.addEventListener("click", async () => {
  // Grab the exact text the user typed
  const typedCity = cityInput.value; 
  
  try {
    cityDisplay.textContent = "Loading...";
    tempDisplay.textContent = "--";
    conditionDisplay.textContent = "--";
    // 3. Fetch the data dynamically
    const response = await fetch(`https://wttr.in/${typedCity}?format=j1`);
    const result = await response.json();
    
    // 4. Update the UI!
    // We can just use the word they typed for the city name
    cityDisplay.textContent = typedCity; 
    
    // Drill deep into the result box for the specific data
    tempDisplay.textContent = result.current_condition[0].temp_C;
    conditionDisplay.textContent = result.current_condition[0].weatherDesc[0].value;
    
  } catch(error) {
    // 5. The Safety Net
    cityDisplay.textContent = "Error";
    tempDisplay.textContent = "--";
    conditionDisplay.textContent = "Could not find city.";
  }
});
cityInput.AddEventListener("keypress",(event)=> {
    if(event.key === "Enter"){
        searchBtn.click();
        }
});