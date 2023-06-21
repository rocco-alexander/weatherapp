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
        <style>
            .navbar{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 0;
            }
            input[type=checkbox]{
                display: none;
            }
            .hamburger{
                display: none;
                user-select: none;
                font-size: 1.5125rem;
            }
            .menu{
                display: flex;
                gap: 1rem;
            }
            .menu > li{
                list-style: none;
            }
            .menu > li:hover{
                background: #eee;
            }
            .logo{
                font-size: 2.5rem;
                background: none;
            }
            @media (max-width: 768px) {
                .menu{
                    display: none;
                    position: absolute;
                    background: white;
                    right: 0;
                    left: 0;
                    text-align: center;
                    padding: 16px 0;
                    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
                    border-radius: 8px;
                }
                /* element with 'menu' class that comes after a checked checkbox is displayed as block */
                input[type=checkbox]:checked ~ .menu{ 
                    display: block;
                }
                .hamburger{
                    display: block;
                }
            }
        </style>
        `
    }

}

customElements.define('main-nav', Navbar);


