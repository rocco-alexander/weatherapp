import {fetchHourlyWeather} from '../../API/fetchData.js'
import {showHourlyWeather} from "../../API/RenderManager.js";

class HourlyForecastButton extends HTMLElement{
    connectedCallback(){
        const BUTTON_TEXT = 'Hourly';
        const fetchDataButton = document.createElement('button');
        fetchDataButton.addEventListener('click', async () =>{
            const data = await fetchHourlyWeather();
            showHourlyWeather(data)
        });
        fetchDataButton.innerText = BUTTON_TEXT;
        this.appendChild(fetchDataButton)
    }
}
customElements.define('hourly-forecast-button', HourlyForecastButton);
