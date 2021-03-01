/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './exemplo.css'

import ImageSlider from './ImageSlider.js'
import { SliderData } from './SliderData.js'

export default () => {

    return (

        <div className="app-exemplo">

            <div className="pageExemplos" >
                <header>
                    No curso você <small>aprenderá a criar artes e carrosséis</small> como esses<small>:</small>
                </header>

               <ImageSlider slides={SliderData} />
               

                <div className="botaoo">
                    <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button-exemplo">QUERO GARANTIR MINHA VAGA</button></ a>
                </div>
            </div>

        </div>
    )
}