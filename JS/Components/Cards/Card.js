class Card extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ""
    }
}
customElements.define('card-data', Card);