var cityForm = document.querySelector(".city-search-form");
var cityInput = document.querySelector(".search-city");
var currentCity = document.querySelector(".current-city-name");



var getWeather = function (cityName) {
    //format the first api url
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=7570d2477f6e5e833116781b24b1cf5c&units=imperial";

    // make a get request to url
    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data, cityName);
                var lon = data[0].lon;
                var lat = data[0].lat;
                //display city / weather
                var todayName = data[0].name;
                currentCity.textContent = todayName;
                console.log(data);

                //format second api url
                var apiUrlTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=7570d2477f6e5e833116781b24b1cf5c&units=imperial";
                

            });

        });


};

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





// add event listeners to form and button container
cityForm.addEventListener("submit", formSubmitHandler);