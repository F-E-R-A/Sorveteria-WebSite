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
        <div className="sorvetes">
            <div className="sorv">
                <div className="image-sorvete">
                    <img id="avela" src="/assets/sabor-cookies-avela.png" alt="Sabor Avela" Title="Sabor: Cookies-Avela"/>
                </div>
                <div className="sobre-sorvete">
                    <div className="descr-name">
                        <div className="desc">
                            <p>Descrição</p>
                        </div>
                        <div className="name">
                            <p><span>Sabor:</span> Cookies Avelã</p>
                        </div>
                    </div>
                    <div className="text-descr">
                        <p>Nascido em berço esplêndido, educado e poliglota, o Avelã com Chocolate é um sabor globalizado 
                           que já virou esse mundo de ponta cabeça.</p>
                    </div>
                </div>
            </div>
            <div className="sorv">
                <div className="image-sorvete">
                    <img id="oreo" src="/assets/sabor-oreo.png" alt="Sabor Oreo" Title="Sabor: Oreo"/>
                </div>
                <div className="sobre-sorvete">
                    <div className="descr-name">
                        <div className="desc">
                            <p>Descrição</p>
                        </div>
                        <div className="name">
                            <p><span>Sabor:</span> Oreo</p>
                        </div>
                    </div>
                    <div className="text-descr">
                        <p>Criada pela Nabisco, a bolacha com dois discos de chocolate recheada com baunilha surgiu 
                           em 1912, ou seja, tem mais de 100 anos! Só que foi apenas nos anos 1970 que, nos Estados 
                           Unidos, começaram a surgir variedades com cobertura de chocolate e outras inovações. 
                           No Brasil, chegou nos anos 1980.</p>
                    </div>
                </div>
            </div>
            <div className="sorv">
                <div className="image-sorvete">
                    <img id="pistache" src="/assets/sabor-pistache.png" alt="Sabor Pistache" Title="Sabor: Pistache"/>
                </div>
                <div className="sobre-sorvete">
                    <div className="descr-name">
                        <div className="desc">
                            <p>Descrição</p>
                        </div>
                        <div className="name">
                            <p><span>Sabor:</span> Pistachi</p>
                        </div>
                    </div>
                    <div className="text-descr">
                        <p>A Sicília é a produtora dos melhores pistaches do mundo, e foi para lá que o Chef 
                           Oliver embarcou em busca de inspiração para a primeira série de gelatos especiais. 
                           A colheita do Pistacchio é bem peculiar acontecendo a cada dois anos.</p>
                    </div>
                </div>
            </div>
            <div className="sorv">
                <div className="image-sorvete">
                    <img id="morango" src="/assets/sorbet-morango.png" alt="Sabor Morango" Title="Sabor: Morango"/>
                </div>
                <div className="sobre-sorvete">
                    <div className="descr-name">
                        <div className="desc">
                            <p>Descrição</p>
                        </div>
                        <div className="name">
                            <p><span>Sabor:</span> Morango</p>
                        </div>
                    </div>
                    <div className="text-descr">
                        <p>O morango é um fruto suculento, com sabor levemente ácido e aroma agradável e forte,
                           tendo a vantagem adicional de ser pouco calórico. Ele é rico em vitaminas C e B5; fibras, 
                           cálcio, ferro e também flavonoides.</p>
                    </div>
                </div>
            </div>
            <div className="sorv">
                <div className="image-sorvete">
                    <img id="kiwi" src="/assets/sorbet-kiwi.png" alt="Sabor Kiwi" Title="Sabor: Kiwi"/>
                </div>
                <div className="sobre-sorvete">
                    <div className="descr-name">
                        <div className="desc">
                            <p>Descrição</p>
                        </div>
                        <div className="name">
                            <p><span>Sabor:</span> Kiwi</p>
                        </div>
                    </div>
                    <div className="text-descr">
                        <p>O kiwi pode ser considerado um “millennial” entre as frutas. Isso porque, 
                           ao contrário de outras frutas como tangerinas, bananas, abacaxis e melancias, que 
                           são cultivadas e consumidas há milhares de anos, o kiwi só foi introduzido na nossa 
                           dieta por volta de 1900.</p>
                    </div>
                </div>
            </div>
            <div className="sorv">
                <div className="image-sorvete">
                    <img id="limao" src="/assets/sorbet-limao.png" alt="Sabor Limão" Title="Sabor: Limão"/>
                </div>
                <div className="sobre-sorvete">
                    <div className="descr-name">
                        <div className="desc">
                            <p>Descrição</p>
                        </div>
                        <div className="name">
                            <p><span>Sabor:</span> Limão</p>
                        </div>
                    </div>
                    <div className="text-descr">
                        <p>Sabor conhecido pela maioria dos brasileiros, o limão está presente em toda parte.
                           Sem dúvida é um dos melhores segundo pesquisas feitas. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
); 

export default Products;