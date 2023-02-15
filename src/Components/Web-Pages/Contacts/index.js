import React from 'react';
import './style.css';

import Header from '../../Header/';
import Footer from '../../Footer/';

const Contacts = () => (
    <section>
        <div className="Header">
            <Header/>
        </div>
        <div className="contacts"> 
            <div className="title-redes-sociais">
                <h2>Siga nossas Redes Sociais</h2>
            </div>
            <div className="image-redes">
                <img src="/assets/redes.png" alt="Image-Redes" title="Redes Sociais"/>
            </div>
            <div className="redes">
                <div className="card-rede">
                    <img src="/assets/Facebook-grande.png" alt="Facebook" title="Facebook"/>
                    <h2>Facebook</h2>
                    <p><a href="#">#sorveteria_art</a></p>
                    <p>Siga nossa página no nosso Facebook. Conteúdos diários e novos sabores.</p>
                </div>
                <div className="card-rede">
                    <img src="/assets/instagram-grande.png" alt="Instagram" title="Instagram"/>
                    <h2>Instagram</h2>
                    <p><a href="#">@sorveteria_art</a></p>
                    <p>Siga nosso pergil no Instagram. Lives, entreterimento, stories e novidades ao vivo diariamente.</p>
                </div>
                <div className="card-rede">
                    <img src="/assets/whatsapp-grande.png" alt="WhatsApp" title="WhatsApp"/>
                    <h2>WhatsApp</h2>
                    <p><a href="#">(33) 98817-2356</a></p>
                    <p>Temos também uma assistente inteligente no nosso WhatsApp.</p>
                </div>
                <div className="card-rede">
                    <img src="/assets/email-grande.png" alt="E-mail" title="E-mail"/>
                    <h2>E-mail</h2>
                    <p><a href="#">sorveteria.art@sorbet.com</a></p>
                    <p>Em caso de dúvidas, envie-nos um e-mail detalhado para analisarmos.</p>
                </div>
            </div> 
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </section>
);

export default Contacts;