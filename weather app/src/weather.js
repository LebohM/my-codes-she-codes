/**function GetWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  const Apikey = "1f151e560699fdd0aaf7cad161399047";
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sparis&appid=${Apikey}&units=metric`;
    response.data.main.temp
  );
}


const Apikey = "1f151e560699fdd0aaf7cad161399047";
const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sparis&appid=${Apikey}&units=metric`;
axios.get(ApiUrl).then(GetWeatherCondition);**/

function getWeather(city)
{
  const Apikey = "1f151e560699fdd0aaf7cad161399047";
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;

  axios.get(ApiUrl).then
  (
    function(response)
    {
      document.querySelector("#tempnow").innerHTML =
        Math.round(response.data.main.temp) + "°C";
    
     let cityName = document.querySelector("#textbox");
     let despcityName = document.querySelector("#h1-city");
     despcityName.innerHTML = cityName.value;
    }
  )
}

  /*window.onload = function() {
  document.getElementById("Btnsearch").onclick = function () {
    const cityName = document.getElementById("textbox").value;
    getWeather(cityName);
  };
}**/


function SearchCity(city)
{
    preventDefault();
  city = document.querySelector("#textbox");

  const Apikey = "1f151e560699fdd0aaf7cad161399047";
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;

   axios.get(ApiUrl).then(getWeather(city));
   

   //displayCity.innerHTML = city.value;
} 
const search = document.querySelector("#Btnsearch");
search.addEventListener("click", SearchCity);

function handleSubmit(event) {
  //event.preventDefault();
  let city = document.querySelector("#textbox").value;
  SearchCity(city);
  console.log(city);
}