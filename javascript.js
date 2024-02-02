function convertTemperature() {
    var inputTemperature = document.getElementById("temperatureInput").value;
    var unit = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result");

    // Clear previous result
    resultElement.textContent = "";

    // Check if the input is a number
    if (isNaN(inputTemperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    // Convert temperature based on the selected unit
    if (unit === "celsius") {
        var fahrenheitTemperature = (parseFloat(inputTemperature) * 9 / 5) + 32;
        resultElement.textContent = inputTemperature + " Celsius is " + fahrenheitTemperature.toFixed(2) + " Fahrenheit.";
    } else {
        var celsiusTemperature = (parseFloat(inputTemperature) - 32) * 5 / 9;
        resultElement.textContent = inputTemperature + " Fahrenheit is " + celsiusTemperature.toFixed(2) + " Celsius.";
    }
}
