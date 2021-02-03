import React , { useEffect } from 'react';
import Work1 from "../assets/img/work1.jpg"
import Work2 from "../assets/img/work2.jpg"
import Work3 from "../assets/img/work3.jpg"
import Work4 from "../assets/img/work4.jpg"
import Work5 from "../assets/img/work5.jpg"
import Work6 from "../assets/img/work6.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/styles.css"
const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    });
    return (
        <section class="work section" id="work">
        <h2 class="section-title">Work</h2>

        <div class="work__container bd-grid">
            <div data-aos="fade-down" data-aos-delay="200" class="work__img">
                <img src={Work1} alt=""/>
            </div>
            <div data-aos="fade-down" data-aos-delay="400"  class="work__img">
                <img src={Work2} alt=""/>
            </div>
            <div data-aos="fade-down" data-aos-delay="600"  class="work__img">
                <img src={Work3} alt=""/>
            </div>
            <div data-aos="fade-down" data-aos-delay="800"  class="work__img">
                <img src={Work4} alt=""/>
            </div>
            <div data-aos="fade-down" data-aos-delay="1000"  class="work__img">
                <img src={Work5} alt=""/>
            </div>
            <div data-aos="fade-down" data-aos-delay="1200"  class="work__img">
                <img src={Work6} alt=""/>
            </div>
        </div>
    </section>
    )
}

export default Portfolio
