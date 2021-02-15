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
                            <div className="de147">R$147,90</div>  
                            <div class="two"></div>
                        </div>
                                              
                        <div className="de47">
                            <div className="valor47">R$47,90</div>
                            <div className="ate12">Até 12x sem juros.</div>
                        </div>

                        <div className="menosDe150">Pague <small>menos de R$1,59 por dia</small> e tenha acesso ao curso completo. O melhor de tudo é que o curso é <small>VITALÍCIO!</small> </div>

                        <div className="sectionPromoButton">
                            <button className="buttonPromo"><div className="bbb">COMPRAR AGORA</div></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}