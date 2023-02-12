import React from 'react';
import './style.css';

const Footer = () => (
    <div className="footer">
        <div className="contatos">
            <div className="logo">
                <img src="/assets/logo.png" alt="Logo-Empresa" title="Logo-Empresa"/>
            </div>
            <div className="endereco">
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campo, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div className="contato">
                <h3>CONTATO</h3>
                <p>info@sorveteria.com</p>
                <p>Tel.: (11) 3556-7890</p>
            </div>
            <div className="horarios">
                <h3>HORÁRIOS</h3>
                <p>Aberto todos os dias</p>
                <p>10:00H - 22:00H</p>
            </div>
        </div>
        <div className="iframe-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.575573705213!2d-46.662842377486946!3d-23.554292704890223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d29ed3f9e3%3A0xedfaab0d6aa153fc!2sIceMellow%20Sorvetes%20e%20Sobremesas%20-%20Shopping%20Frei%20Caneca!5e0!3m2!1spt-BR!2sbr!4v1676123415938!5m2!1spt-BR!2sbr" 
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className="copyright">
            <p>© Gelateria. Orgulhosamente desenvolvido por @Marcos André.</p>
        </div>
    </div> 
);

export default Footer; 