import React from "react";
import './style.css';

const Products = () => (
    <div id="products" className="products">
        <div className='sabores'>
            <div className="block-sabores">
                <div className="image-sabores">
                    <img src="/assets/banner-sabores.jpg" alt="Image-Sabores" title="Sabores"/>
                </div>
                <div class="text-sabores">
                    <h2>NOSSOS SABORES</h2>
                    <p>Novos e Deliciosos!</p>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na Gelateria todos os nossos
                    produtos são naturais, à base de frutas e sem nenhum conservante. Também temos opção sem 
                    lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete ser delicioso e 
                    saudável ao mesmo tempo!
                    </p>
                </div>
            </div>
            <div className="block-eventos">
                <div className="text-eventos">
                    <h2>NOSSOS EVENTOS</h2>
                    <p>Delicias com sorvete!</p>
                    <p>Mais do que uma sorveteria, uma extensão da sua vida. Estamos aqui prontinhos para tem
                       atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha conhecer 
                       nossos produtos e passar um tempo aqui com a gente. 
                    </p>
                </div>
                <div className="image-eventos">
                    <img src="/assets/eventos-image.jpg" alt="Image-Eventos" title="Eventos"/>
                </div>
            </div>
        </div>
    </div>
); 

export default Products;