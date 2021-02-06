import React,{useState} from 'react'
import "../styles/styles.css"
import 'boxicons'
import Switch from "./switch"

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
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="cfonseca.netlify.app" className="nav__logo">Cristian Fonseca</a>
                </div>

                <div className={`${isNavCollapsed ? 'nav__menu': 'nav__menu show'}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        <li className="nav__item"><Switch/></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <box-icon className="icon" ata-target="#nav-smenu" aria-controls="nav-menu" name='menu'  onClick={handleNavCollapse} aria-expanded={!isNavCollapsed ? false : false}  />
                </div>
            </nav>
        </header>
    )
}

export default Header
