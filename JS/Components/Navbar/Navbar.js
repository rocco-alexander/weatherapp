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
        //
        // this.addEventListener('mouseout', (e)=>{
        //     console.log(e.target);
        //     if(e.target.className !== 'nav-link' || e.target.className !== 'menu'){
        //         console.log('close her up')
        //         document.getElementById('checkbox_toggle').checked = false
        //     }
        // })
    }
}


customElements.define('main-nav', Navbar);


