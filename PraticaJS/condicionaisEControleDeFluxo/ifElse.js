// if...else

let temperature = 36
const highTemperature = temperature >= 37.5
const mediumTemperature = (temperature < 37.5) && (temperature >= 37)

if(highTemperature){
    console.log('Você está com febre alta')
} else if(mediumTemperature){
    console.log('Você está com febre moderada')
} else {
    console.log('Você está saudavel')
}