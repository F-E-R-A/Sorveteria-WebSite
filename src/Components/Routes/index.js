import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Web-Pages/Home/';
import Products from '../Web-Pages/Products/';
import About from '../Web-Pages/About/';
import Contact from '../Web-Pages/Contacts';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
);

export default Rotas; 