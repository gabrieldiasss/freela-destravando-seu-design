/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import './exemplo.css'

import ImageSlider from './ImageSlider.js'
import { SliderData } from './SliderData'

export default () => {

    
    return (

        <div className="app-exemplo">

            <div className="pageExemplos" >
                <header>
                    No curso você <small>aprenderá a criar artes e carrosséis</small> como esses<small>:</small>
                </header>

               <ImageSlider slides={SliderData} />

                <div className="botaoo">
                    <button className="primeiro-button-exemplo" >QUERO PARTICIPAR</button>
                </div>
            </div>

        </div>
    )
}