import React from 'react';
import './skills.css';
import clogo from "../../asset/clogo.png"
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const Skills = () => {
    return (
        <section id='skills'>
            <h2 className='contacttitle'> Mes Compétences</h2>
            <div className='skillbar'>  
                <div className='skillBarsleft'>
                    <div className='up'>
                        <div className='left1'>
                            <a href='https://fr.wikipedia.org/wiki/C_(langage)' target='blank'>
                                <img src={clogo} alt="clogo" className='clogo hoverImg' />
                            </a>
                            <div className='skillBarText'>
                                <h2>Language C</h2>
                                <p> Les projets Epitech sont en C </p>
                            </div>
                        </div>
                        <div className='right'>
                            <a href='https://fr.wikipedia.org/wiki/JavaScript' target='blank'>
                                <IoLogoJavascript className="java hoverImg" size={100} color='yellow'></IoLogoJavascript>
                            </a>
                            <div className='javatext'>
                                <h2>Java script</h2>
                                <p className="whiteText"> this is a demo </p>
                            </div>
                        </div>
                    </div>
                    <div className='down'>
                        <div className='left2'>
                            <a href='https://fr.wikipedia.org/wiki/Python_(langage)' target='blank'>
                                <FaPython className='python hoverImg' size={100} color='black'></FaPython>
                            </a>
                            <div className='pythontext'>
                                <h2>Python</h2>
                                <p> pour les projets en Maths </p>
                            </div>
                        </div>
                        <div className='right2'>
                            <a href='https://en.wikipedia.org/wiki/HTML' target='blank'>
                            <FaHtml5 className="html hoverImg" size={70} color='orange'></FaHtml5>
                            </a>
                            <a href='https://en.wikipedia.org/wiki/CSS' target='blank'>
                            <FaCss3 className='css hoverImg' size={60} color='royalblue'></FaCss3>
                            </a>
                            <div className='htmltext'>
                                <h2>Html/Css</h2>
                                <p className="whiteText"> this is a demo </p>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills