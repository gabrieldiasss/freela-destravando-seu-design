/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Logo from './logo-tr.png'

import './promocao.css'

export default () => { 
    return(
        <div className="app-promocao" >

            <div className="pagePromocao">
                <div className="boxPromocao">
                    <div className="boxHeader" >
                        <img className="logoBoxHeader" src={Logo} />
                    </div>

                    <div className="boxMain">
                       
                        <div class="menu-toggle">
                            <div class="one"></div>
                            <div className="de147">R$497,90</div>  
                            <div class="two"></div>
                        </div>
                                              
                        <div className="de47">
                            <div className="valor47">R$97,00</div>
                            <div className="ate12">Até 12x sem juros.</div>
                        </div>

                        <div className="menosDe150">Pague <small>menos de R$3,23 por dia</small> e tenha acesso ao treinamento completo.</div>

                        <div className="sectionPromoButton">
                            <a href="https://pay.hotmart.com/A42461362S?checkoutMode=10" target="_blank" ><button className="buttonPromo"><div className="bbb">COMPRAR AGORA</div></button></ a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}