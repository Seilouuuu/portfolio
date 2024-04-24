import React from 'react';
import { useRef } from 'react';
import './scroll.css';
import Contacts from '../contact/contact';
import logo from '../../asset/realnet.png';
import ScrollToTop from '../scrollToTop/scrolltotop';
import Intro from '../Intro/intro';
import SkillsComponent from '../skills/skills';
import Aboutme from '../aboutme/aboutme';
import Works from '../works/work';

const Scroll = () => {
    const skillsRef = useRef(null);
    const Portfolio = useRef(null);
    const Contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <div className="scroll">
            <ScrollToTop />
            <a href='https://www.youtube.com/watch?v=hvL1339luv0' target='blank'>
                <img src={logo} alt='Logo' className='logo' />
            </a>
            <ul className='navbar'>
            <div className='bars'>
                <li onClick={() => scrollToSection(skillsRef)} className='link'>Skills</li>
                <li onClick={() => scrollToSection(Portfolio)} className='link'>Projets</li>
                <li onClick={() => scrollToSection(Contact)} className='link'>Contact</li>
            </div>
            </ul>
            <Intro />
                <Aboutme />
            <div ref={skillsRef} className='Skills'>
            <SkillsComponent/>
            </div>
            <div ref={Portfolio} className='Portfolio'>
                <Works />
            </div>
            <div ref={Contact} className='Contact'>
                <Contacts />
            </div>
        </div>
    )
}

export default Scroll;