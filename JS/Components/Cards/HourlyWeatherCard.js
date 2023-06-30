class HourlyWeatherCard extends HTMLElement {
    connectedCallback() {
        // Props
        const attributes = this.attributes;

//        Set Members to Attributes
        const time =  attributes.time.value.split(' ')[1];
        const temp_c = Math.round(attributes.temp_c.value)  + "°";
        const icon = attributes.icon.value;
        const condition = attributes.condition.value;


        this.innerHTML = `
   <div class="hourly-card">
        <p class="time">${time}</p>
        <p class="hourly-card-temperature">${temp_c}</p>
        <img src="${icon}" alt="">
        <div class="hourly-condition-container">
            <p class="hourly-card-condition">${condition}</p>
        </div>
   </div>`;
    }
}
customElements.define('hourly-weather-card',HourlyWeatherCard);

