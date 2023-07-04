class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar" id="nav">
            <div class="logo">[w]</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle"/>
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li class="nav-link">home</li>
                    <li class="nav-link">about</li>
                </div>
            </ul>
        </nav>
        `

        document.addEventListener('click', (e)=>{
            if(e.target.className !== 'hamburger' && e.target.id !== "checkbox_toggle"){
                document.getElementById('checkbox_toggle').checked = false
            }
        })
    }
}


customElements.define('main-nav', Navbar);


