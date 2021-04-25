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
                    Conheça a nossa área de membros que você terá acesso<small>.</small>
                </header>

                <div className="segunda-parte" >
					<div className="text-segunda-parte">Conheça o lugar que você terá acesso exclusivo para assistir o treinamento!</div>						
				</div>

                <div className="video">
					<ReactPlayer className="videozao" width='860px' height='530px' controls url='https://youtu.be/bCts1l0qVAw' />
				</div>
               
                <div className="botaoo">
                    <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button-exemplo">QUERO GARANTIR MINHA VAGA</button></ a>
                </div>
            </div>

        </div>
    )
}