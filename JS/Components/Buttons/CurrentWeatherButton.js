import {fetchCurrentWeather} from '../../API/fetchData.js'
import {showCurrentWeather} from "../../API/RenderManager.js";
class CurrentWeatherButton extends HTMLElement{
    connectedCallback(){
        const BUTTON_TEXT = 'Today';
        const fetchDataButton = document.createElement('button');
        fetchDataButton.addEventListener('click', async () =>{
            const data = await fetchCurrentWeather();
            showCurrentWeather(data);

        });
        fetchDataButton.innerText = BUTTON_TEXT;
        this.appendChild(fetchDataButton)
    }
}

customElements.define('current-weather-button', CurrentWeatherButton);
