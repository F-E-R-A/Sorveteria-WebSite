import React from 'react';
import './style.css';

import Header from '../../Header/';
import About from '../About/';
import Products from '../Products/';
import Footer from '../../Footer/';

const Home = () => (
    <div id="home" className="home">
        <div className='header'>
            <Header/>
        </div>
        <div className="capa-home">
            <h1>Sorvete Artesanal</h1>
        </div>    
        <div className="products">
            <Products/>
        </div>
        <div className="about">
            <About/>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
);

export default Home;