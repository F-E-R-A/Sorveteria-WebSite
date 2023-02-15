import React from "react";
import './style.css';

import Header from '../../Header/';
import Footer from '../../Footer/';

const Products = () => (
    <div id="products" className="products">
        <header>
            <Header/>
        </header>
        <main> 
            <div className="title-sabores">
                <h1>Nossos Sabores</h1>
            </div>
            <div className="cards-sabores">
                <div className="card">
                    <div className="image-card">
                        <img src="/assets/sabor-oreo.png" alt="Sabor-Oreo" Title="Sabor: Oreo"/>
                    </div>
                    <div className="text-card">
                        <h2>Sorvete de Oreo</h2>
                        <p>Delicioso sorvete sabor Oreo. Uma expressão de sabor.</p>
                    </div>
                    <div className="buttons">
                        <a href="#">Sobre o produto</a>
                        <button>Comprar agora</button>
                        <button>Adicionar no carrinho</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src="/assets/sabor-pistache.png" alt="Sabor-Pistache" Title="Sabor: Pistache"/>
                    </div>
                    <div className="text-card">
                        <h2>Sorvete de Pistache</h2>
                        <p>Cremoso sorvete sabor de Pistache com floquinhos de sementes.</p>
                    </div>
                    <div className="buttons">
                        <a href="#">Sobre o produto</a>
                        <button>Comprar agora</button>
                        <button>Adicionar no carrinho</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src="/assets/sabor-cookies-avela.png" alt="Sabor-Pistache" Title="Sabor: Pistache"/>
                    </div>
                    <div className="text-card">
                        <h2>Sorvete de Cookies Avelã</h2>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="buttons">
                        <a href="#">Sobre o produto</a>
                        <button>Comprar agora</button>
                        <button>Adicionar no carrinho</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src="/assets/sorbet-kiwi.png" alt="Sabor-Kiwi" Title="Sabor: Kiwi"/>
                    </div>
                    <div className="text-card">
                        <h2>Sorvete de Kiwi</h2>
                        <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="buttons">
                        <a href="#">Sobre o produto</a>
                        <button>Comprar agora</button>
                        <button>Adicionar no carrinho</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src="/assets/sorbet-morango.png" alt="Sabor-Morango" Title="Sabor: Morango"/>
                    </div>
                    <div className="text-card">
                        <h2>Sorvete de Morango</h2> 
                        <p>Sorvete de Morango Gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="buttons">
                        <a href="#">Sobre o produto</a>
                        <button>Comprar agora</button>
                        <button>Adicionar no carrinho</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image-card">
                        <img src="/assets/sorbet-limao.png" alt="Sabor-Limão" Title="Sabor: Limão"/>
                    </div>
                    <div className="text-card">
                        <h2>Sorvete de Limão</h2>
                        <p>O incrível sorvete gourmet de Lomão siliano volta encantar.</p>
                    </div>
                    <div className="buttons">
                        <a href="#">Sobre o produto</a>
                        <button>Comprar agora</button>
                        <button>Adicionar no carrinho</button>
                    </div>
                </div>
            </div>
        </main>
        <footer className="footer">
            <Footer/>
        </footer>
    </div>
); 

export default Products;