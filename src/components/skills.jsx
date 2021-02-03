import React , { useEffect } from 'react';
import "../styles/styles.css"
import SkillsImg from "../assets/img/work3.jpg"
import 'boxicons'
import Aos from "aos";
import "aos/dist/aos.css";
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    });
    return (
        <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills__container bd-grid">          
            <div>
                <h2 data-aos="fade-down" class="skills__subtitle">Profesional Skills</h2>
                <p data-aos="fade-down"  class="skills__text">The skills listed here have been studied in courses, books and through the internet, in a self-taught way</p>
                <div data-aos="fade-down" data-aos-delay="200" class="skills__data">
                    <div class="skills__names">
                        <box-icon class="skills__icon" name='html5' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">HTML5</span>
                    </div>
                    <div class="skills__bar skills__html">

                    </div>
                    <div>
                        <span class="skills__percentage">95%</span>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="400" class="skills__data">
                    <div class="skills__names">
                        <box-icon class="skills__icon" name='css3' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">CSS3</span>
                    </div>
                    <div class="skills__bar skills__css">
                        
                    </div>
                    <div>
                        <span class="skills__percentage">85%</span>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="600" class="skills__data">
                    <div class="skills__names">
                        <box-icon class="skills__icon" name='javascript' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">JAVASCRIPT</span>
                    </div>
                    <div class="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span class="skills__percentage">90%</span>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="800" class="skills__data">
                    <div class="skills__names">
                    <box-icon class="skills__icon" name='react' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">REACT.JS</span>
                    </div>
                    <div class="skills__bar skills__react">
                        
                    </div>
                    <div>
                        <span class="skills__percentage">85%</span>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1000" class="skills__data">
                    <div class="skills__names">
                        <box-icon class="skills__icon" name='nodejs' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">NODE.JS</span>
                    </div>
                    <div class="skills__bar skills__nodejs">
                        
                    </div>
                    <div>
                        <span class="skills__percentage">85%</span>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1200" class="skills__data">
                    <div class="skills__names">
                        <box-icon class="skills__icon" name='python' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">PYTHON</span>
                    </div>
                    <div class="skills__bar skills__python">
                        
                    </div>
                    <div>
                        <span class="skills__percentage">90%</span>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="1400" class="skills__data">
                    <div class="skills__names">
                    <box-icon class="skills__icon" name='django' type='logo' color='#4070f4' ></box-icon>
                        <span class="skills__name">DJANGO</span>
                    </div>
                    <div class="skills__bar skills__django">
                        
                    </div>
                    <div>
                        <span class="skills__percentage">75%</span>
                    </div>
                </div>
            </div>
            
            <div>              
                <img data-aos="fade-down" data-aos-delay="600" src={SkillsImg} alt="" class="skills__img"/>
            </div>
        </div>
    </section>

    )
}

export default Skills
