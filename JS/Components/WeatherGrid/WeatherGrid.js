class WeatherGrid extends HTMLElement {
    connectedCallback() {
        // Props
        const attributes = this.attributes;
        // console.log(attributes)

        // Attributes
        const precipitation = attributes.precipitation.value;
        const wind_speed = Math.round(attributes.wind_speed.value) + 'kph';
        const uv = attributes.uv.value;
        const humidity = attributes.humidity.value + '%';

        this.innerHTML = `
        <div class="weather-grid-container">
            <div class="weather-grid-item">
                <img src="./Public/Images/raindrop.png" alt="">
                <p>${precipitation}%</p>
            </div>
            <div class="weather-grid-item">
                <img src="./Public/Images/humidity.png" alt="">
                <p>${humidity}</p>
            </div>
            <div class="weather-grid-item">
                <img src="./Public/Images/windspeed.png" alt="">
                <p>${wind_speed}</p>
            </div>
            <div class="weather-grid-item">
                <img src="./Public/Images/uv.png" alt="">
                <p>${uv}</p>
            </div>
        </div>`
    };
}
customElements.define('weather-grid', WeatherGrid);