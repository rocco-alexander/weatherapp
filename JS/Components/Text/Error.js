class ErrorText extends HTMLElement{
    connectedCallback(){
        const errorText = this.attributes.errorText.value
        this.innerHTML=`
        <div>
            <div id="error">${errorText}</div>
        </div>
        `
    }
}

customElements.define('error-text', ErrorText);
