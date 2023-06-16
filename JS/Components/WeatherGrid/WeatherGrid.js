class WeatherGrid extends HTMLElement {
    connectedCallback() {
        // Props
        const attributes = this.attributes;

        const precipitation = attributes.precipitation.value;


        this.innerHTML = `
        <div class="weather-grid-container">
            <div class="weather-grid-item">
                <img src="./Public/Images/raindrop.jpg" alt="">
                <p>${precipitation}%</p>
            </div>
            <div class="weather-grid-item">
                <img src="./Public/Images/raindrop.jpg" alt="">
                <p>10%</p>
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
        </style>
    `;
    }
}

customElements.define('weather-grid', WeatherGrid);