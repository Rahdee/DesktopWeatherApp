let value =""
let api =`https://api.openweathermap.org/data/2.5/weather?q=${value},"&=test&appid=cfb7c1035e87a85901dfc28ab9bdf966`
    document.getElementById("CityInput").onchange=function(){
        handleChange()
    }

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13){
       getResults(searchbox.value);
        console.log('searchbox.value')
    }
}

function handleChange(e){
    value=document.getElementById('CityInput').value
}

function getResults(query){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query},&=test&appid=cfb7c1035e87a85901dfc28ab9bdf966`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
     let location = document.querySelector('.location');
    let city = document.querySelector('.city');
     city.innerText = `${weather.name}, ${weather.sys.country}`;

   let date = document.querySelector('.date ');
   const now = new Date().toUTCString();
    date.innerText =now;

    console.log(weather)
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°K</span>`;

     let weather_el= document.querySelector('.weather');
     weather_el.innerText=weather.weather[0].main;

    let hilow =document.querySelector('.hi-low');
    hilow.innerText=`${Math.round(weather.main.temp_min)}°K / ${Math.round(weather.main.temp_max)}°K`;
}


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }

  

//   function makeClass(){
//     class Thermostat {
//         constructor (temp){
//             this.temp -5/9 * (temp -32);
//         }
//         get temperature(){
//             return this._temp;
//         }
//         set temperature(updatedTemp){
//             this._temp - updatedTemp;
//         }
//     }
//     return Thermostat;
//   }
//   const Thermostat = makeClass();
//   const thermos = new Thermostat();
//   let temp = thermos.temperature;

//   console.log(temp);

// function dateBuilder(d) {
//     let months = ["January", "February" , "March" , "April" , "May" , "June" , "July" , "August","September",
//     "October" , "November" , "December"];

//     let days = ["Sunday","Monday","Tuesday","Wednesday" , "Thursday","Friday", "Saturday"];

//     let day = days [d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return '${day} ${date} ${month} ${year}';
// }
