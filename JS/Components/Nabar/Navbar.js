import {fetchCurrentWeather} from './fetchData.js'
import {showCurrentWeather} from "./RenderManager.js";
class CurrentWeatherButton extends HTMLElement{
    connectedCallback(){
        const fetchDataButton = document.createElement('button');
        fetchDataButton.addEventListener('click', async () =>{
            const data = await fetchCurrentWeather();
            showCurrentWeather(data);

        });
        fetchDataButton.innerText = 'Current';
        this.appendChild(fetchDataButton)
    }
}

customElements.define('current-weather-button', CurrentWeatherButton);


