import React from 'react';
import './work.css';
import mypaint from '../../asset/mypaint.png';
import minishell from '../../asset/minishell.png'
import sokoban from '../../asset/sokoban.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'> Mes Projets </h2>
            <p className='WorksDesc'> Voici les projets que j'ai pu faire tout au long de l'année,</p>
            <div className='WorkImg'>
                <img src={mypaint} alt="1" className='sworkImg' />
                <img src={minishell} alt="2" className='sworkImg' />
                <img src={sokoban} alt="3" className='sworkImg' />
            </div>
        </section>
    )
}

export default Works