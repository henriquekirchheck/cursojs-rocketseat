// Converta C॰ para F॰ ou vise versa

function convertCelciusToFahrenheit(temperature) {
    temperature = temperature * 9/5 + 32
    return temperature
}

function convertFahrenheitToCelcius(temperature) {
    temperature = (temperature - 32) * 5/9
    return temperature
}

console.log(convertCelciusToFahrenheit(32))
console.log(convertFahrenheitToCelcius(89.6))
