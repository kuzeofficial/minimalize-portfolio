import React,{useState} from 'react'
import "../styles/styles.css"
import 'boxicons'


const Header = () => {
    //MENU HAMBURGUESA
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const navLink = document.querySelectorAll('nav__link');   
    function linkAction(){
    /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
    


    return (
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="cfonseca.netlify.app" class="nav__logo">Cristian Fonseca</a>
                </div>

                <div class={`${isNavCollapsed ? 'nav__menu': 'nav__menu show'}`} id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <box-icon ata-target="#nav-smenu" aria-controls="nav-menu" name='menu' color='#0e2431' onClick={handleNavCollapse} aria-expanded={!isNavCollapsed ? false : false}  />
                </div>
            </nav>
        </header>
    )
}

export default Header
