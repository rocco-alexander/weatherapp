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
   <div class="card hourly-card">
        <p class="time">${time}</p>
        <p class="hourly-card-temperature">${temp_c}</p>
        <img src="${icon}" alt="">
        <div class="hourly-condition-container">
            <p class="hourly-card-condition">${condition}</p>
        </div>
   </div>
   <style>
        .hourly-card{
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .hourly-condition-container{
            display:flex;
            justify-content: flex-start;    
            min-width: 30%;
            max-width: 30%;
        }
        .hourly-condition-container > p{
            font-size: .8125rem;
        }
        
        .hourly-card-temperature{
            font-weight: bold;
            font-size: 1rem;
        }
        .hourly-card > p {
            font-size: .8125rem;
        }
   </style>
    `;
    }
}
customElements.define('hourly-weather-card',HourlyWeatherCard);

