const MAIN_WEATHER_CONTAINER = 'main-weather-container';
const STICKY_CONTAINER = 'sticky-container';

const showCurrentWeather = (data) => {
    const stickyContainer = document.getElementById(STICKY_CONTAINER);

    if(stickyContainer.hasChildNodes()){
        stickyContainer.removeChild(stickyContainer.lastChild)
    }

    // console.log(data);
    const mainWeatherCard = document.createElement('main-weather-card');
    mainWeatherCard.setAttribute('date', data.location.localtime);
    mainWeatherCard.setAttribute('location', data.location.name);
    mainWeatherCard.setAttribute('icon', data.current.condition.icon);
    mainWeatherCard.setAttribute('temp_c', data.current.temp_c);
    mainWeatherCard.setAttribute('temp_f', data.current.temp_f);
    mainWeatherCard.setAttribute('daily_high_c', data.forecast.forecastday[0].day.maxtemp_c);
    mainWeatherCard.setAttribute('daily_low_c', data.forecast.forecastday[0].day.mintemp_c);
    mainWeatherCard.setAttribute('daily_high_f', data.forecast.forecastday[0].day.maxtemp_f);
    mainWeatherCard.setAttribute('daily_low_f', data.forecast.forecastday[0].day.mintemp_f);
    mainWeatherCard.setAttribute('condition', data.forecast.forecastday[0].day.condition.text);


    // append main content
    stickyContainer.appendChild(mainWeatherCard);
};

const buildWeatherGrid  = (data) =>{
    const mainWeatherContainer = document.getElementById(MAIN_WEATHER_CONTAINER);
    if(mainWeatherContainer.hasChildNodes()){
        removeNodes(mainWeatherContainer)
    }
    const weatherGrid  = document.createElement('weather-grid');

    weatherGrid.setAttribute('precipitation', data.forecast.forecastday[0].day.daily_chance_of_rain);
    // console.log(weatherGrid.attributes);
    weatherGrid.setAttribute('wind_speed', data.current.wind_kph);
    weatherGrid.setAttribute('uv',data.current.uv);
    weatherGrid.setAttribute('humidity',data.current.humidity);

    mainWeatherContainer.appendChild(weatherGrid)

};

const showHourlyWeather = (data) =>{
    const mainWeatherContainer = document.getElementById(MAIN_WEATHER_CONTAINER);

    if(mainWeatherContainer.hasChildNodes()){
        removeNodes(mainWeatherContainer)
    }
    data[0].hour.map(hour => {
        const hourlyCard = document.createElement('hourly-weather-card');
        hourlyCard.setAttribute('time', hour.time);
        hourlyCard.setAttribute('temp_c', hour.temp_c);
        hourlyCard.setAttribute('condition', hour.condition.text);
        hourlyCard.setAttribute('icon', hour.condition.icon);
        mainWeatherContainer.appendChild(hourlyCard);
    });

};

const showWeeklyForecast = (data) =>{
    const mainWeatherContainer = document.getElementById(MAIN_WEATHER_CONTAINER);
    if(mainWeatherContainer.hasChildNodes()){
        removeNodes(mainWeatherContainer)
    }
    const forecastContainer = document.createElement('div');
    data.map(res =>{
        const miniCard = document.createElement('mini-card');
        miniCard.setAttribute('date', res.date_epoch);
        miniCard.setAttribute('icon', res.day.condition.icon);
        miniCard.setAttribute('daily_high', res.day.maxtemp_c);
        miniCard.setAttribute('daily_low', res.day.mintemp_c);
        forecastContainer.appendChild(miniCard);
    });
    mainWeatherContainer.appendChild(forecastContainer)
};

const showError = (parentElement, errorText) => {
    const error = document.createElement('error-text');
    removeNodes(parentElement);
    error.setAttribute('errorText',errorText);
    parentElement.appendChild(error)
};

const removeNodes = (element) => {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
};

export {showWeeklyForecast, showCurrentWeather,showError, showHourlyWeather, removeNodes, buildWeatherGrid};