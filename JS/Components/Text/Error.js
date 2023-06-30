class ErrorText extends HTMLElement{
    connectedCallback(){
        const errorText = this.attributes.errorText.value;
        this.innerHTML=`
        <div>
            <p id="error">${errorText}</p>
        </div>
        `
    }
}

customElements.define('error-text', ErrorText);
