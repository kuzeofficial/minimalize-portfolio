import React from 'react'
import "boxicons"
import "../styles/styles.css"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__title">Cristian</p>
            <div className="footer__social">
                <a href="https://t.me/christian_devk" className="footer__icon"><box-icon name='telegram' type='logo' color='#ffffff' ></box-icon></a>
                <a href="cristiancomas@hotmail.com" className="footer__icon"><box-icon name='mail-send' color='#ffffff' ></box-icon></a>
                <a href="https://twitter.com/cristian_devk" className="footer__icon"><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
    )
}

export default Footer
