import {fetchWeeklyWeather} from '../../API/fetchData.js'
import {showWeeklyForecast} from "../../API/RenderManager.js";
import {changeButtonColor} from "./ButtonGroup.js";
class WeeklyForecastButton extends HTMLElement{
    connectedCallback(){
        const BUTTON_TEXT = '7-Day';
        const fetchDataButton = document.createElement('button');
        fetchDataButton.id='weekly-forecast-button';
        fetchDataButton.addEventListener('click', async (e) =>{
            const data = await fetchWeeklyWeather();
            showWeeklyForecast(data);
            changeButtonColor(e);
        });
        fetchDataButton.innerText = BUTTON_TEXT;
        this.appendChild(fetchDataButton)
    }
}
customElements.define('weekly-forecast-button', WeeklyForecastButton);
