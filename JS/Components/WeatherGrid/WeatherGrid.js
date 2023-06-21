class WeatherGrid extends HTMLElement {
    connectedCallback() {
        // Props
        const attributes = this.attributes;

        if(attributes){

        }

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
        </div>
        <style>
            .weather-grid-container{
                margin-top: 1rem;
                display: grid;
                grid-template-columns: auto auto;
                gap: 1rem;
            }
            .weather-grid-item{
                text-align: center;
                border: 1px solid #c8d6e5;
                border-radius: 5px;
                box-sizing: border-box;
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
            }
            .weather-grid-item > img{
                max-height: 64px;
                min-height: 64px;
                margin-bottom: .5rem;
            }
            .weather-grid-item > p{
                font-weight: bold;
                font-size: 1rem;
            }
        </style>`
    };
}
customElements.define('weather-grid', WeatherGrid);