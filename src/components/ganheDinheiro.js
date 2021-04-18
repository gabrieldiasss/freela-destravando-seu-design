/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import GanheDinheiroImg from './imgGanheDinheiro.svg'

import './ganheDinheiro.css'

export default () => {
    return(
        <div className="app-pageGanheDinheiro">
            
            <div className="pageGanheDinheiro" >
                <div className="reverseGanheDinheiro">
                     <div className="img-ganheDinheiro-section">
                        <img className="img-ganheDinheiro" src={GanheDinheiroImg} />
                    </div>

                    <div className="button-ganheDinheiro-cima">
                        <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button">RESERVE A SUA VAGA</button></ a>
                    </div>
                </div>
               
                
                <div className="texts-ganheDinheiro">

                    <div className="line">

                    </div>

                    <div className="main-text">
                        Chega de sofrer para <small>conseguir clientes.</small>
                    </div>

                    <div className="second-text">
                    Você está cansado(a) de não encontrar clientes que pagam o valor que o seu trabalho vale? nesse treinamento você aprenderá técnicas para conquistar ótimos clientes!
                    </div>

                    
                    <div className="button-ganheDinheiro">
                        <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button">RESERVE A SUA VAGA</button></a>
                    </div>

                    

                </div>
            </div>

            

        </div>
    )
}