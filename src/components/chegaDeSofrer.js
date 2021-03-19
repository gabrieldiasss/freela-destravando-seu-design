/* eslint-disable react/jsx-no-target-blank */
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
                        Assim que você seguir o passo a passo, você ficará muito bom ao ponto de criar carrosséis, criativos e artes para os seus clientes de forma mais eficaz e com muito mais qualidade.
                    </div>

                    <div className="button-chegaDeSofrer-cima">
                        <a href="https://ev.braip.com/checkout/plaq0zxr/che3rl4v" target="_blank" ><button className="primeiro-button">QUERO APRENDER</button></ a>
                    </div>

                </div>

                <div className="reverse" >
                    <div className="button-chegaDeSofrer">
                        <a href="https://ev.braip.com/checkout/plaq0zxr/che3rl4v" target="_blank" ><button className="primeiro-button">QUERO APRENDER</button>	</a>
                    </div>

                    <div className="img-chegaDeSofrer-section">
                        <img className="img-chegaDeSofrer" src={ChegaDeSofrerImg} />
                    </div>
                </div>

                

            </div>

        </div>
    )
}
