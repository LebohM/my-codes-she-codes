function GetWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  console.log(response.data.name);
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#discribe").innerHTML = response.data.weather[0].main;
  
}

function seachCity(city) {
  city = document.querySelector("#textbox");
  let displayCity = document.querySelector("#h1-city");

  //let Apikey = "1f151e560699fdd0aaf7cad161399047";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=1f151e560699fdd0aaf7cad161399047&units=metric`;
  axios.get(ApiUrl).then(GetWeatherCondition);

  displayCity.innerHTML = city.value;

}

/**function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#textbox").value;
  seachCity(city);
}**/

let searchBtn = document.querySelector("#Btnsearch");
searchBtn.addEventListener("click", seachCity);

function getDay(day) {
  let dayNum = day.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturdy",
  ];
  let today = days[dayNum];
  console.log(today);

  let hours = day.getHours();
  let mins = day.getMinutes();
  if (hours < 10) {
    return `${today} 0${hours}:${mins}`;
  }

  if (mins < 10) {
    return `${today} ${hours}:0${mins}`;
  }

  return `${today} ${hours}:${mins}`;
}
let day = document.querySelector("#day");
let currentDay = new Date();
day.innerHTML = getDay(currentDay);

function ConvertTempCels(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#tempnow");
  currentTemp.innerHTML = 21;
}


function ConvertTempFahr(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#tempnow");
  currentTemp.innerHTML = Math.round(69.8);
}
/**let temperatureF = document.querySelector("#fahr");
temperatureF.addEventListener("click", ConvertTempFahr);**

/**let temperature = document.querySelector("#cels");
temperature.addEventListener("click", ConvertTempCels);**/

//let ApiUrl ="https://api.openweathermap.org/data/2.5/weather?q=Durban&units=metric";
//let ApiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;


function GetLocation(position) {
  let Apikey = "c1f151e560699fdd0aaf7cad161399047";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${Apikey}&units=metric`;

  axios.get(ApiUrl).then(GetWeatherCondition);
}
//axios.get(`${ApiUrl}&appid=${Apikey}`).then(showTemperature);