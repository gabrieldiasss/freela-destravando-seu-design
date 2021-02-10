/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import ChegaDeSofrerImg from './img-chegadesofrer.svg'
import './chegaDeSofrer.css'

export default () => {
    return(
        <div className="app-pageChegaDeSofrer">

            <div className="pageChegaDeSofrer">
                
                <div className="texts-pageChegaDeSofrer">

                    <div className="line">

                    </div>

                    <div className="main-text-pageChegaDeSofrer">
                        Chega de sofrer na hora de criar<small>.</small>
                    </div>

                    <div className="second-text-pageChegaDeSofrer">
                        Você nunca mais sofrerá para criar suas artes, carrosséis, criativos e muito mais!
                    </div>

                    <div className="second-text-pageChegaDeSofrer">
                        Assim que você seguir o passo a passo, você ficará muito bom ao ponto de criar carrosséis, criativos, e artes para os seus clientesde forma mais eficaz e com muito mais qualidade.
                    </div>

                    <div className="button-ganheDinheiro">
                        <button className="primeiro-button">QUERO COMPRAR O CURSO</button>	
                    </div>

                </div>

                <div className="img-chegaDeSofrer-section">
                    <img className="img-chegaDeSofrer" src={ChegaDeSofrerImg} />
                </div>

            </div>

        </div>
    )
}
