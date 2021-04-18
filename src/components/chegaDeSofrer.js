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
                        Neste treinamento você aprenderá do básico ao avançado no photoshop!
                    </div>

                    <div className="second-text-pageChegaDeSofrer">
                        Você aprenderá tudo que precisa para criar, carrosséis, flyers, criativos, posts para o instagram e muito mais, tudo de uma forma mais eficaz e com muita qualidade.
                    </div>

                    <div className="button-chegaDeSofrer-cima">
                        <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button">QUERO APRENDER</button></ a>
                    </div>

                </div>

                <div className="reverse" >
                    <div className="button-chegaDeSofrer">
                        <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button">QUERO APRENDER</button>	</a>
                    </div>

                    <div className="img-chegaDeSofrer-section">
                        <img className="img-chegaDeSofrer" src={ChegaDeSofrerImg} />
                    </div>
                </div>

                

            </div>

        </div>
    )
}
