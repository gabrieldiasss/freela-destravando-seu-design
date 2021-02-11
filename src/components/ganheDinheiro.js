/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import GanheDinheiroImg from './imgGanheDinheiro.svg'

import './ganheDinheiro.css'

export default () => {
    return(
        <div className="app-pageGanheDinheiro">
            
            <div className="pageGanheDinheiro" >
                <div className="img-ganheDinheiro-section">
                    <img className="img-ganheDinheiro" src={GanheDinheiroImg} />
                </div>

                

                <div className="texts-ganheDinheiro">

                    <div className="line">

                    </div>

                    <div className="main-text">
                        Chega de sofrer para <small>conseguir clientes!</small>
                    </div>

                    <div className="second-text">
                        Com esse curso, você aprenderá técnicas para adquirir clientes, criando designs de altissíma qualidade! 
                    </div>

                    
                    <div className="button-ganheDinheiro">
                        <button className="primeiro-button">QUERO COMPRAR O CURSO</button>	
                    </div>

                    

                </div>
            </div>

            

        </div>
    )
}