import React from 'react';
import './App.css';

import Header from './Components/Header/';
import Footer from './Components/Footer/';
import Routes from './Components/Routes/';

export default function App(){
    return(
        <div className="app">
            <header>
                <Header/>
            </header>
            <main>
                <Routes/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

