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
                        <a href="https://pay.hotmart.com/A42461362S?checkoutMode=10" target="_blank" ><button className="primeiro-button">RESERVE A SUA VAGA</button></ a>
                    </div>
                </div>
               
                
                <div className="texts-ganheDinheiro">

                    <div className="line">

                    </div>

                    <div className="main-text">
                        Com esse conhecimento você pode fazer de <small>R$500 a + DE R$2000 por mês</small> trabalhando no conforto da sua casa mesmo sendo iniciante!
                    </div>

                    <div className="second-text">
                        Com o conhecimento que você vai obter nesse treinamento você poderá trabalhar prestando serviços de design para as milhares de pessoas que possuem um negócio na internet.
                    </div>

                    <div className="button-ganheDinheiro">
                        <a href="https://pay.hotmart.com/A42461362S?checkoutMode=10" target="_blank" ><button className="primeiro-button">RESERVE A SUA VAGA</button></a>
                    </div>

                </div>
            </div>

            

        </div>
    )
}