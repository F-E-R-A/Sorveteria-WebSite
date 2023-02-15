import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Header = () => {
    return(  
        <div className="header"> 
            <div className="div-logo">
                <Link to='/'><img id="logo-empresa" src="/assets/logo.png" alt="logo" title="Logo-Empresa"/></Link>
                <div className="input-search">
                    <img src="/assets/lupa.png" alt="Lupa" title="Pesquisar"/>
                    <input type="search" placeholder="Pesquisar..."/>
                </div>
            </div>
            <div className="div-navegation">
                <div className="list-nav">
                    <a href="#"><img src="/assets/Lista_icon.png" alt="Navegação" title="Navegação"/></a>
                </div>
                <div className="nav-links">
                    <Link className="Links" to="/about">Sobre</Link>
                    <Link className="Links" to="/products">Produtos</Link>
                    <Link className="Links" to="/contact">Contato</Link>
                </div>
                <div className="user-cart">
                    <Link id="cart" to=""><img src="/assets/carrinho-carrinho.png" alt="Carrinho" title="Carrinho"/></Link>
                    <Link id="user-icon" to=""><img src="/assets/profile-user.png" alt="Usuário" title="Usuário"/></Link>
                </div>
            </div> 
        </div> 
    );
};

export default Header; 