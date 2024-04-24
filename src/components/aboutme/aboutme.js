import React from 'react';
import './aboutme.css';
import Myimage from "../../asset/imfport.jpg";

const Aboutme = () => {
    return (
        <section id='contact'>
            <h2 className='contacttitle'> Tout d'abord, </h2>
            <div className='aboutmebar'>
                <div className='rectangle2 hoverImg' style={{ backgroundImage: `url(${Myimage})` }}></div>
                <div className='rectangle hoverImg'></div>
                <div className='text'>Je m'appelle Seila Aillet et je suis</div>
                <div className='text2'>étudiante en première année</div>
                <div className='text3'> à Epitech Montpellier</div>
                <div className='rectangle3 hoverImg'> SoftSkills
                <ul className="skillsList">
                        <li>Curieuse</li>
                        <li>Collaborative</li>
                        <li>Autonome</li>
                        <li>Motivée</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Aboutme;