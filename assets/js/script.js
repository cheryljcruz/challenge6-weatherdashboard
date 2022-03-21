// search form and input
var cityForm = document.querySelector(".city-search-form");
var cityInput = document.querySelector(".search-city");
// current city weather info
var currentCity = document.querySelector(".current-city-name");
var currentIcon = document.querySelector(".current-icon");
var currentDate = document.querySelector(".current-date");
var currentTemp = document.querySelector(".current-temperature")
var currentHumidity = document.querySelector(".current-humidity");
var currentWind = document.querySelector(".current-wind-speed");
var currentUV = document.querySelector(".current-uv-index");

//five day forecast
//day one
var tempOne = document.querySelector(".one-temp");
var windOne = document.querySelector(".one-wind");
var humidOne = document.querySelector(".one-humid");
//day two
var tempTwo = document.querySelector(".two-temp");
var windTwo = document.querySelector(".two-wind");
var humidTwo = document.querySelector(".two-humid");
//daythree
var tempThree = document.querySelector(".three-temp");
var windThree = document.querySelector(".three-wind");
var humidThree = document.querySelector(".three-humid");
//dayfour
var tempFour = document.querySelector(".four-temp");
var windFour = document.querySelector(".four-wind");
var humidFour = document.querySelector(".four-humid");
//dayfive
var tempFive = document.querySelector(".five-temp");
var windFive = document.querySelector(".five-wind");
var humidFive = document.querySelector(".five-humid");


// both api calls 
var getWeather = function (cityName) {
    //format the first api url
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=7570d2477f6e5e833116781b24b1cf5c&units=imperial";

    // make a get request to url
    fetch(apiUrl)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data, cityName);
                    var lon = data[0].lon;
                    var lat = data[0].lat;
                    //display city / weather
                    var todayName = data[0].name;
                    currentCity.textContent = todayName;
                    console.log(data);

                    //format second api url
                    var apiUrlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=7570d2477f6e5e833116781b24b1cf5c&units=imperial";
                    fetch(apiUrlTwo)
                        .then(function (response) {
                            response.json()
                                .then(function (data) {
                                    console.log(data);
                                    currentWeather(data);
                                    fiveDayForecast(data);

                                })
                        })

                });

        });


};
//search form
var formSubmitHandler = function (event) {
    //prevent page refresh
    event.preventDefault();

    // get value from the input element
    var searchCity = cityInput.value.trim();

    if (searchCity) {
        getWeather(searchCity);
        cityInput.value = "";
    } else {
        alert("Please enter a city");
    }
};
//display current weather
var currentWeather = function (data) {
    //current icon
    var currentImg = data.current.weather[0].icon;
    // create element for icon to diplay

    //current temp display
    var currentTemperature = data.current.temp;
    currentTemp.textContent = currentTemperature;
    //current humidity display
    var currentHumid = data.current.humidity;
    currentHumidity.textContent = currentHumid;
    //current windspeed
    var currentWindSpeed = data.current.wind_speed;
    currentWind.textContent = currentWindSpeed;
    //current uv index
    var currentUVIndex = data.current.uvi;
    currentUV.textContent = currentUVIndex;

};

//five day forecast
var fiveDayForecast = function (data) {
    //dayone
    var dayonetemp = data.daily[0].temp.day;
    tempOne.textContent = dayonetemp;
    var dayonewind = data.daily[0].wind_speed;
    windOne.textContent = dayonewind;
    var dayonehumid = data.daily[0].humidity;
    humidOne.textContent = dayonehumid;

    //daytwo
    var daytwotemp = data.daily[1].temp.day;
    tempTwo.textContent = daytwotemp;
    var daytwowind = data.daily[1].wind_speed;
    windTwo.textContent = daytwowind;
    var daytwohumid = data.daily[1].humidity;
    humidTwo.textContent = daytwohumid;

    // day three
    var daythreetemp = data.daily[2].temp.day;
    tempThree.textContent = daythreetemp;
    var daythreewind = data.daily[2].wind_speed;
    windThree.textContent = daythreewind;
    var daythreehumid = data.daily[2].humidity;
    humidThree.textContent = daythreehumid;

    //day four
    var dayfourtemp = data.daily[3].temp.day;
    tempFour.textContent = dayfourtemp;
    var dayfourwind = data.daily[3].wind_speed;
    windFour.textContent = dayfourwind;
    var dayfourhumid = data.daily[3].humidity;
    humidFour.textContent = dayfourhumid;

    //day five
    var dayfivetemp = data.daily[4].temp.day;
    tempFive.textContent = dayfivetemp;
    var dayfivewind = data.daily[4].wind_speed;
    windFive.textContent = dayfivewind;
    var dayfivehumid = data.daily[4].wind_speed;
    humidFive.textContent = dayfivehumid;
};








// add event listeners to form and button container
cityForm.addEventListener("submit", formSubmitHandler);