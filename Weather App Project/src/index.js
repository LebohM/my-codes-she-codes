
function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
     if (hours < 10) {
       hours = `0${hours}`;
     }
    let minutes = date.getMinutes();
     if (minutes < 10) {
       minutes = `0${minutes}`;
     }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[date.getDay()];

    return `${day} ${hours}:${minutes}`;
}

function displayTemp(response){
    console.log(response);
    let Currentcity = document.querySelector("#city");
    Currentcity.innerHTML = response.data.name;

    let DescribeTemp = document.querySelector("#description");
    DescribeTemp.innerHTML = response.data.weather[0].description;

    let temperature = document.querySelector("#temp");
    temperature.innerHTML = Math.round(response.data.main.temp);

    let humid = document.querySelector("#humidity");
    humid.innerHTML = Math.round(response.data.main.humidity);

    let windSpeed = document.querySelector("#wind");
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    let dateTime = document.querySelector("#daytime");
    dateTime.innerHTML = formatDate(response.data.dt*1000);
}

let Apikey = "1f151e560699fdd0aaf7cad161399047";
const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${Apikey}&units=metric`;

axios.get(ApiUrl).then(displayTemp);