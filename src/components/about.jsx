import React , { useEffect } from 'react';
import "../styles/styles.css"
import AboutImg from "../assets/img/about.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    });
    return (
        <section class="about section " id="about">
            <h2 class="section-title">About</h2>

            <div class="about__container bd-grid">
                <div data-aos="fade-down" class="about__img">
                    <img src={AboutImg} alt=""/>
                </div>
                
                <div>
                    <h2 data-aos="fade-down" data-aos-delay="400" class="about__subtitle">I'am Cristian</h2>
                    <p data-aos="fade-down" data-aos-delay="400" class="about__text">
                    I introduce myself, I'm Cristian Fonseca. Fullstack Web Developer, currently located in Cuba. I work as a freelancer developer. I'm 18 years old. I'm a fan of self-taught learning.
                    I consider myself a fighter, enthusiastic, persevering, always eager to learn. My passion is development.
                    </p>           
                </div>                                   
            </div>
        </section>
    )
}

export default About
