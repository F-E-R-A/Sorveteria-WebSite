import React from 'react';
import './style.css';

const About = () => (
    <div id="about" className="about">
        <div className="text-about">
            <h2>Sobre Nós</h2>
            <p>Alegria em cada conquista!</p>
            <p>Venha tomar o melhor sorvete da região aqui com agente. Nós estamos há 
            anos no mercado produzindo o que tem de melhor para o nosso 
            cliente e você não pode ficar fora dessa. Venha fazer uma visita e aproveite o melhor
            atendimento e o melhor sorvete da cidade.</p>
        </div>
        <div className="image-about">
            <img src="/assets/sobre-image.jpg" alt="Ilustração_1" title="Amigos"/>
            <img src="/assets/sorveteria.jpg" alt="Ilustração_2" title="Sorveteria"/>
        </div>
    </div>
);

export default About;  