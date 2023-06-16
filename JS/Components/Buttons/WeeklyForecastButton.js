import {fetchWeeklyWeather} from '../../API/fetchData.js'
import {showWeeklyForecast} from "../../API/RenderManager.js";
class WeeklyForecastButton extends HTMLElement{
    connectedCallback(){
        const BUTTON_TEXT = '7-Day';
        const fetchDataButton = document.createElement('button');
        fetchDataButton.addEventListener('click', async () =>{
            const data = await fetchWeeklyWeather();
            showWeeklyForecast(data)
        });
        fetchDataButton.innerText = BUTTON_TEXT;
        this.appendChild(fetchDataButton)
    }
}
customElements.define('weekly-forecast-button', WeeklyForecastButton);
