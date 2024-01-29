// Get the input elements
const inputDegree = document.querySelector("input[name='degree']");
const inputTempType = document.querySelector("#input-temp-types");
const outputDegree = document.querySelector("#temperature-unit");
const outputTempType = document.querySelector("#output-temp-types");
const convertBtn = document.querySelector("#converter-btn");

// Define the conversion formulas
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const toKelvin = (celsius) => celsius + 273.15;
const toReamur = (celsius) => celsius * 0.8;

// Define a function that converts the input temperature to the output temperature
const convertTemperature = () => {
  // Get the input values
  let inputTemp = parseFloat(inputDegree.value);
  let inputUnit = inputTempType.value;
  let outputUnit = outputTempType.value;

  // Check if the input is valid
  if (isNaN(inputTemp)) {
    alert("Please enter a valid number for the temperature");
    return;
  }

  // Convert the input temperature to celsius
  let celsiusTemp;
  if (inputUnit === "fahrenheit") {
    celsiusTemp = toCelsius(inputTemp);
  } else if (inputUnit === "kelvin") {
    celsiusTemp = inputTemp - 273.15;
  } else if (inputUnit === "reamur") {
    celsiusTemp = inputTemp / 0.8;
  } else {
    celsiusTemp = inputTemp;
  }

  // Convert the celsius temperature to the output unit
  let outputTemp;
  if (outputUnit === "fahrenheit") {
    outputTemp = toFahrenheit(celsiusTemp);
  } else if (outputUnit === "kelvin") {
    outputTemp = toKelvin(celsiusTemp);
  } else if (outputUnit === "reamur") {
    outputTemp = toReamur(celsiusTemp);
  } else {
    outputTemp = celsiusTemp;
  }

  // Display the output temperature
  outputDegree.textContent = outputTemp.toFixed(2);
};

// Add an event listener to the convert button
convertBtn.addEventListener("click", convertTemperature);
