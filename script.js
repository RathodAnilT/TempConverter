function convertTemperature() {
    // Get input values
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = document.getElementById('fahrenheit').value;

    // Check which input is not empty and perform conversion
    if (celsius !== "") {
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (fahrenheit !== "") {
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
}
