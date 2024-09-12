//Time Section - maybe us another js file for wx widget and use import/export module?//

let now

function masterClock(){
    const masterNow = new Date();
    now = masterNow
};



function updateClockGeo1() {
  
    const hours = now.getUTCHours() - 5; //Minus 5 hours from UTC during DST; could include 'if' to compare const endOfDST = new Date(Date.UTC(2024, 10, 3, 6, 0, 0))//
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand1').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand1').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand1').style.transform = `rotate(${secondDeg}deg)`;
}


function updateClockGeo2() {
    
    const hours = now.getUTCHours() + 1; //London GMT + 1//
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand2').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand2').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand2').style.transform = `rotate(${secondDeg}deg)`;
}


function updateClockGeo3() {
    
    const hours = now.getUTCHours() - 4; // New York GMT - 4 during DST//
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand3').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand3').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand3').style.transform = `rotate(${secondDeg}deg)`;
}


function updateClockGeo4() {
    
    const hours = now.getUTCHours() + 4; //New Delhi is GMT + 5:30//
    const minutes = now.getUTCMinutes() + 30;
    const seconds = now.getUTCSeconds();

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteDeg = minutes * 6 + (seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.querySelector('#hour-hand4').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('#minute-hand4').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('#second-hand4').style.transform = `rotate(${secondDeg}deg)`;
}




setInterval(masterClock, 1000);
setInterval(updateClockGeo1, 1000);
setInterval(updateClockGeo2, 1000);
setInterval(updateClockGeo3, 1000);
setInterval(updateClockGeo4, 1000);

masterClock()
updateClockGeo1();
updateClockGeo2();
updateClockGeo3();
updateClockGeo4();

//*************Weather widget sections below**************************************** */

const apiKey = "752a802622ba8d12cd6c6d18438a7291";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const weatherIcon1 = document.getElementById("weather-icon1");
const weatherIcon2 = document.getElementById("weather-icon2");
const weatherIcon3 = document.getElementById("weather-icon3");
const weatherIcon4 = document.getElementById("weather-icon4");

async function checkWeather1(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=nashville&appid=" + `${apiKey}`);


    if (response.status == 404 || response.status == 401 || response.status == 400) {
        document.getElementById("temp1").textContent = "Error";
        document.getElementById("wind1").textContent = "Error";
    } else {
        var data = await response.json();

        document.getElementById("temp1").textContent = Math.round(data.main.temp) + "° F";
        document.getElementById("wind1").textContent = Math.round(data.wind.speed) + " MPH";
            //CyLuvsKat//
        if (data.weather[0].main == "Clouds") {
            weatherIcon1.src = "./assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon1.src = "./assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon1.src = "./assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon1.src = "./assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon1.src = "./assets/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon1.src = "./assets/snow.png";
        }
    }
}

async function checkWeather2(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=london&appid=" + `${apiKey}`);


    if (response.status == 404 || response.status == 401 || response.status == 400) {
        document.getElementById("temp2").textContent = "Error";
        document.getElementById("wind2").textContent = "Error";
    } else {
        var data = await response.json();

        document.getElementById("temp2").textContent = Math.round(data.main.temp) + "° F";
        document.getElementById("wind2").textContent = Math.round(data.wind.speed) + " MPH";
            //CyLuvsKat//
        if (data.weather[0].main == "Clouds") {
            weatherIcon2.src = "./assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon2.src = "./assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon2.src = "./assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon2.src = "./assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon2.src = "./assets/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon2.src = "./assets/snow.png";
        }
    }
}

async function checkWeather3(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=New%20York&appid=" + `${apiKey}`);


    if (response.status == 404 || response.status == 401 || response.status == 400) {
        document.getElementById("temp3").textContent = "Error";
        document.getElementById("wind3").textContent = "Error";
    } else {
        var data = await response.json();

        document.getElementById("temp3").textContent = Math.round(data.main.temp) + "° F";
        document.getElementById("wind3").textContent = Math.round(data.wind.speed) + " MPH";
            //CyLuvsKat//
        if (data.weather[0].main == "Clouds") {
            weatherIcon3.src = "./assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon3.src = "./assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon3.src = "./assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon3.src = "./assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon3.src = "./assets/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon3.src = "./assets/snow.png";
        }
    }
}

async function checkWeather4(city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=New%20Delhi&appid=" + `${apiKey}`);


    if (response.status == 404 || response.status == 401 || response.status == 400) {
        document.getElementById("temp4").textContent = "Error";
        document.getElementById("wind4").textContent = "Error";
    } else {
        var data = await response.json();

        document.getElementById("temp4").textContent = Math.round(data.main.temp) + "° F";
        document.getElementById("wind4").textContent = Math.round(data.wind.speed) + " MPH";
            //CyLuvsKat//
        if (data.weather[0].main == "Clouds") {
            weatherIcon4.src = "./assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon4.src = "./assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon4.src = "./assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon4.src = "./assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon4.src = "./assets/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon4.src = "./assets/snow.png";
        }
    }
}
document.addEventListener('DOMContentLoaded', checkWeather1());
document.addEventListener('DOMContentLoaded', checkWeather2());
document.addEventListener('DOMContentLoaded', checkWeather3());
document.addEventListener('DOMContentLoaded', checkWeather4());

setInterval(checkWeather1, 300000);
setInterval(checkWeather2, 300000);
setInterval(checkWeather3, 300000);
setInterval(checkWeather4, 300000);