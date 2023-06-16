
class MainWeatherCard extends HTMLElement {
    connectedCallback() {
        // Props
        const attributes = this.attributes;

//        Set Members to Attributes
        const date = new Date(attributes.date.value).toDateString();
        const location = attributes.location.value;
        const temp_c = Math.round(attributes.temp_c.value) + "°";
        const icon = attributes.icon.value;
        const daily_high = Math.round(attributes.daily_high.value) + "°";
        const daily_low = Math.round(attributes.daily_low.value) + "°";
        const high_low = daily_high + '/ ' + daily_low
        const condition = attributes.condition.value;
        const precipitation = attributes.precipitation.value + "%";

        this.innerHTML = `
   <div class="card">
            <div id="current-date" class="date">${date}</div>
            <div class="location-temperature-container">
                <div id="current-location-name" class="location">${location}</div>
                <div class="temperature-container">
                    <div id="current-location-temperature" class="temperature">${temp_c}</div>
                    <img src="${icon}" class="temp-icon">
                </div>
            </div>
            <div id="hi-low" class="hi-low">${high_low}</div>
                <div class="condition-container">
                    <div id="current-condition" class="condition">${condition}</div>
                    <div id="current-precipitation-chance" class="pop">POP: ${precipitation}</div>
                </div>
            <div id="current-real-feel"></div>
        </div>
    `;
    }
}
customElements.define('main-weather-card',MainWeatherCard);

