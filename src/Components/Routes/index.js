import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Web - Pages/Home/';
import Products from '../Web - Pages/Products/';
import About from '../Web - Pages/About/';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas;