let weather = {
  apiKey: "1f151e560699fdd0aaf7cad161399047",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    /**document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";**/
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Durban");

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
