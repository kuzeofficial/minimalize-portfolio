import React from 'react'
import "../styles/styles.css"
import 'boxicons'


const Header = () => {
// TODO: IMPLEMENTAR EL MENU HAMBURGESA
    
    return (
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="cfonseca.netlify.app" class="nav__logo">Cristian Fonseca</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <box-icon name='menu' color='#0e2431' ></box-icon>
                </div>
            </nav>
        </header>
    )
}

export default Header
