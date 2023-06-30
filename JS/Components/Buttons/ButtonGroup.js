class ButtonGroup extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div id="button-group">
            <current-weather-button id="current"></current-weather-button>
            <hourly-forecast-button id="hourly"></hourly-forecast-button>
            <weekly-forecast-button id="weekly"></weekly-forecast-button>
        </div>
        `;
    }
}

const changeButtonColor = (e) =>{
    if(!e.target.classList.contains('active')) {
        resetActive();
        e.target.classList += 'active';
    }
};

const resetActive = (all) => {
    const groupChildren = Array.prototype.slice.call(document.getElementById('button-group').children);
    groupChildren.forEach((element) => {
        const child = (element.childNodes[0]);
        child.classList = '';
    });
    if (all === 1) {
        groupChildren[0].childNodes[0].className = 'active';
    }
};

export {changeButtonColor, resetActive}
customElements.define('button-group', ButtonGroup);
