/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './exemplo.css'

import ReactPlayer from 'react-player'

export default () => {

    return (

        <div className="app-exemplo">

            <div className="pageExemplos" >
                <header>
                    Veja o vídeo do meu canal no Youtube e conheça um pouco do meu trabalho<small>.</small>
                </header>

                <div className="video">
					<ReactPlayer className="videozao" width='860px' height='530px' controls url='https://www.youtube.com/watch?v=sBA8Sn5UjUk' />
				</div>
               
                <div className="botaoo">
                    <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button-exemplo">QUERO GARANTIR MINHA VAGA</button></ a>
                </div>
            </div>

        </div>
    )
}