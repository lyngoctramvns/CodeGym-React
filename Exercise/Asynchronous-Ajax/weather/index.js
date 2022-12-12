// function getAPI(){
//     return new Promise(function(resolve){
//         axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Ha Noi,VN&limit=1&appid=82739899029d32464cb7c5dcf43c46ae`)
//         .then(function(json){
//             resolve(json);
//     })
// })

// }

// getAPI().then(result => {
//     console.log(result)

// });


function getAPIWeather(lat,lon){
    return new Promise(function(resolve){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=82739899029d32464cb7c5dcf43c46ae`)
        .then(function(json){
            resolve(json.data);
    })
})

}




getAPIWeather("21.0245","105.8412").then(result => {
    let Loctemp = ((result.main.temp) - 273.15).toFixed(2);
    document.getElementById('test').innerHTML = `
    City name: ${result.name}
    <br/>
    Temperature: ${Loctemp}℃
    <br/>
    Atmospheric pressure: ${result.main.pressure} on sea level
    <br/>
    Humidity: ${result.main.humidity}%
    <br/>
    Cloudiness: ${result.clouds.all}%
    <br/>
    Visibility: ${result.visibility}m
    `
});

getAPIWeather("10.75","106.6667").then(result => {
    let Loctemp = ((result.main.temp) - 273.15).toFixed(2);
    document.getElementById('test2').innerHTML = `
    City name: ${result.name}
    <br/>
    Temperature: ${Loctemp}℃
    <br/>
    Atmospheric pressure: ${result.main.pressure} on sea level
    <br/>
    Humidity: ${result.main.humidity}%
    <br/>
    Cloudiness: ${result.clouds.all}%
    <br/>
    Visibility: ${result.visibility}m
    `
});
