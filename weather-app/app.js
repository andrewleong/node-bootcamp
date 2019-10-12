// Weather app
const fetch = require("node-fetch");

const url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

fetch(url)
.then(data => data.json())
.then(response => console.log("res", response.weather))
.catch(err => console.error("Error Happened", err))