
class MainWeatherCard extends HTMLElement {
    connectedCallback() {

        this.toggleFerenehit = false;

        // Props
        const attributes = this.attributes;
//        Set Members to Attributes
        const date = new Date(attributes.date.value).toDateString();
        const location = attributes.location.value;
        const temp_c = Math.round(attributes.temp_c.value) + "°";
        const temp_f = Math.round(attributes.temp_f.value) + "°";
        const icon = attributes.icon.value;
        const daily_high_c = Math.round(attributes.daily_high_c.value) + "°";
        const daily_low_c = Math.round(attributes.daily_low_c.value) + "°";
        const daily_high_f = Math.round(attributes.daily_high_f.value) + "°";
        const daily_low_f = Math.round(attributes.daily_low_f.value) + "°";

        const daily_high = this.toggleFerenehit ? daily_high_f : daily_high_c;
        const daily_low = this.toggleFerenehit ? daily_low_f : daily_low_c;

        const high_low = daily_high + '/ ' + daily_low;
        const condition = attributes.condition.value;



        this.innerHTML = `
   <div class="card">
            <p id="current-date" class="date">${date}</p>
            <div class="location-temperature-container">
                <p id="current-location-name" class="location">${location}</p>
                <div class="temperature-container">
                    <div class="icon-temperature-container">
                        <p id="current-location-temperature" class="temperature">${temp_c}</p>
                        <img src="${icon}" class="temp-icon">
                    </div>
                </div>
            </div>
            <p id="hi-low" class="hi-low">${high_low}</p>
                <div class="condition-container">
                    <p id="current-condition" class="condition">${condition}</p>
                </div>
    </div>
    `;
        //ADD CONVERSION OF TEMPERATURES
        // this.addEventListener('click',(e)=>{
        //     console.log(e.target.className);
        //     if(e.target.className === 'temperature' || e.target.className === 'hi-low' ){
        //
        //     }
        // })
    }
}

const conversion = (temperature) =>{

}

customElements.define('main-weather-card',MainWeatherCard);

