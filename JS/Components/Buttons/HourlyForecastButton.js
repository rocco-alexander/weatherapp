import {fetchHourlyWeather} from '../../API/fetchData.js'
import {showHourlyWeather} from "../../API/RenderManager.js";
import {changeButtonColor} from "./ButtonGroup.js";

class HourlyForecastButton extends HTMLElement{
    connectedCallback(){
        const BUTTON_TEXT = 'Hourly';
        const fetchDataButton = document.createElement('button');
        fetchDataButton.id='hourly-forecast-button';
        fetchDataButton.addEventListener('click', async (e) =>{
            const data = await fetchHourlyWeather();
            showHourlyWeather(data);
            changeButtonColor(e)
        });
        fetchDataButton.innerText = BUTTON_TEXT;
        this.appendChild(fetchDataButton)
    }
}
customElements.define('hourly-forecast-button', HourlyForecastButton);
