var cityForm = document.querySelector(".city-search-form");
var cityInput = document.querySelector(".search-city");



var getWeather = function (cityName) {
    //format the first api url
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=7570d2477f6e5e833116781b24b1cf5c&units=imperial";

    // make a get request to url
    fetch(apiUrl)
        .then(function (response) {
            //request was successful
            response.json().then(function (data) {
                console.log(data, cityName);

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
 console.log(formSubmitHandler);
// add event listeners to form and button container
cityForm.addEventListener("submit", formSubmitHandler);