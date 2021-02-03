import React , { useEffect } from 'react';
import "../styles/styles.css"
import 'boxicons'
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    });
    return (
        
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <div data-aos="fade-down" data-aos-duration="duration: 2000">
                    <h1 class="home__title">Hi,<br/>I'am <span className="home__title-color">Cristian</span><br/><Typed
                        className="typed-text"
                        strings={["Web Developer","Frontend Developer", 'Backend Developer']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                        /></h1>
                </div>
                <div data-aos="fade-down" data-aos-delay="200">
                    <a href="tel:+5354777898" className="button">Contact</a>
                </div>
            </div>
            <div className="home__social">
                <a href="" data-aos="fade-down" data-aos-delay="200" className="home__social-icon"><box-icon name='linkedin' type='logo' color='#0e2431' ></box-icon></a>
                <a href="https://twitter.com/cristian_devk" data-aos="fade-down" data-aos-delay="400" className="home__social-icon"><box-icon name='twitter' type='logo' color='#0e2431' ></box-icon></a>
                <a href="https://github.com/kuzeofficial" data-aos="fade-down" data-aos-delay="600" className="home__social-icon"><box-icon name='github' type='logo' color='#0e2431' ></box-icon></a>
            </div>
            <div data-aos="fade-down" data-aos-delay="400" className="home__img">
                <img className="circular__img" src="https://avatars.githubusercontent.com/u/65286318?s=460&u=7618959b1f798558071a149425bebef161676fd4&v=4" alt="profile"/>
            </div>
        </section>
    )
}

export default Home
