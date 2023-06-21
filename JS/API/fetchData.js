import { showCurrentWeather,buildWeatherGrid} from "./RenderManager.js";
const key = "0ba53ab8345b49108dd143552230506";

class Search{
    constructor(location) {
        this.searchString = location;
        this.prevSearchString = this.searchString
    }
    static searchString;
}
const query = new Search('Markham');

fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key} &q=${query.searchString} &days=7&aqi=no&alerts=no\n`)
    .then(response => response.json())
    .then(data => {
        showCurrentWeather(data);
        return data;
    })
    .then(data => buildWeatherGrid(data));

const fetchWeeklyWeather = async () =>{
    let result = null;
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key} &q=${query.searchString} &days=7&aqi=no&alerts=no\n`)
            .then(response => response.json())
            .then(data => data.forecast.forecastday)
            .then(data => result = data);
        return result

};

const fetchCurrentWeather = async (location) => {
    await updateLocation(location);
    let result = null;
    let success = 0;
    try{
        await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key} &q=${query.searchString} &days=7&aqi=no&alerts=no\n`)
            .then((res)=>{success = res.ok ? 1 : 0; return res})
            .then(response => response.json())
            .then(data => result = data)
    }catch (e) {
        return e;
    }finally {
        if(!success){updateLocation(query.prevSearchString)}
    }
    return result;
};

const fetchHourlyWeather = async() =>{
    let result = null;
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key} &q=${query.searchString} &days=7&aqi=no&alerts=no\n`)
        .then(response => response.json())
        .then(data => data.forecast.forecastday)
        .then(data => result = data);
    return result
}


const updateLocation = (location) => {
    if(typeof (location) === "undefined" || typeof (location) === undefined){
        return;
    }
    else{
        query.prevSearchString = query.searchString;
        query.searchString = location;
        console.log(query.prevSearchString, query.searchString)
    }
};

export {fetchWeeklyWeather, fetchCurrentWeather, fetchHourlyWeather};
