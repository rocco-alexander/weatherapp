import {fetchCurrentWeather} from '../../API/fetchData.js'
import {showCurrentWeather} from "../../API/RenderManager.js";
import {buildWeatherGrid} from "../../API/RenderManager.js";
import {changeButtonColor} from "./ButtonGroup.js";
class CurrentWeatherButton extends HTMLElement{
    connectedCallback(){
        const BUTTON_TEXT = 'Today';
        const fetchDataButton = document.createElement('button');
        fetchDataButton.id='current-weather-button';
        fetchDataButton.className='active ';
        fetchDataButton.addEventListener('click', async (e) =>{
            const data = await fetchCurrentWeather();
            showCurrentWeather(data);
            buildWeatherGrid(data);
            changeButtonColor(e)
        });
        fetchDataButton.innerText = BUTTON_TEXT;
        this.appendChild(fetchDataButton)
    }
}
customElements.define('current-weather-button', CurrentWeatherButton);
