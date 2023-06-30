class MiniCard extends HTMLElement {
    connectedCallback() {
        // Props
        const attributes = this.attributes;

        // Assign Members to Props
        const date = new Date(attributes.date.value * 1000).toUTCString().toLocaleString().split(',')[0];
        const icon = attributes.icon.value;
        const high = Math.round(attributes.daily_high.value);
        const low = Math.round(attributes.daily_low.value);

        this.innerHTML = `
    <div>
        <div class="mini-card">
            <p>${date}</p>    
            <img src="${icon}" alt="">
            <div class="mini-card-temperature-container">
                <p>${high + '°' + ' / ' + low + '°'}</p>
            </div>
        </div>    
    </div>`;
    }
}

customElements.define('mini-card', MiniCard);