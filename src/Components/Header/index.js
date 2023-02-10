import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Header = () => {
    return( 
        <div className="header">
            <div className="div-logo">
                <img src="/assets/logo.png" alt="logo" title="Logo-Empresa"/>
            </div>
            <div className="div-navegation">
                <Link className="Links" to="/about">Sobre</Link>
                <Link className="Links" to="/products">Produtos</Link>
                <Link className="Links" to="/">Home</Link>
            </div>
        </div> 
    );
};

export default Header;