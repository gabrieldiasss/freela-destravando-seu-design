/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import Premium from './imgPremium.svg'

import './vouAprender.css'

export default () => {

    const [boxAprender,] = useState([
        {modulo: '1° Módulo', titulo: 'Iniciando a sua jornada.', subtitulo: 'Nesse módulo você vai começar oficialmente a sua jornada no design e receberá alguns recados importantes'},
        {modulo: '2° Módulo', titulo: 'Programa de trabalho.', subtitulo: 'Nesse módulo você conhecerá o programa que iremos utilizar e aprenderá a instalar no seu notebook ou computador'},
        {modulo: '3° Módulo', titulo: 'Photoshop e ferramentas.', subtitulo: 'Nesse módulo você aprenderá do básico ao avançado no Photoshop de uma forma descomplicada!'}
    ])

    const [boxAprender2] = useState([
        {modulo: '4° Módulo', titulo: 'Princípios básicos de design.', subtitulo: 'Nesse módulo você aprenderá sobre tipografia, psicologia das cores, alinhamento, contraste e muito mais!'},
        {modulo: '5° Módulo', titulo: 'Chegou a hora de aprender na prática.', subtitulo: 'Nesse módulo você vai aprender na prática a criar carroseis, flyers, criativos para anúncios, posts para as redes sociais e muito mais!'},
        {modulo: '6° Módulo', titulo: 'Trabalhos gráficos para empresas.', subtitulo: 'Nesse módulo você aprenderá na prática desde o processo de criação até o fechamento de arquivo para impressões gráficas.'},

    ])

    return(

        <div className="app-vouAprender">

            <div className="PageVouAprender">
                <header className="header-vouAprender" >
                    Quais são os <small>módulos</small> do treinamento<small>?</small>
                </header>
                    
                <div className="todas-box" >
                    <div className="section-box" > 
                            {boxAprender.map((item, key) => ( 
                                <div className="box" key={key} >
                                    <header>
                                        <div className="background-modulo">
                                            <div className="modulo">
                                                {item.modulo}
                                            </div>
                                        </div>
                                    </header>

                                    <div className="titulo-box">
                                        {item.titulo}
                                    </div>

                                    <div className="description-box">
                                        {item.subtitulo}
                                    </div>
                                </div>
                            ))}
                            
                        </div>

                        <div className="section-box" > 
                            {boxAprender2.map((item, key) => ( 
                                <div className="box" key={key} >
                                    <header>
                                        <div className="background-modulo">
                                            <div className="modulo" >
                                                {item.modulo}
                                            </div>
                                        </div>
                                    </header>

                                    <div className="titulo-box">
                                        {item.titulo}
                                    </div>

                                    <div className="description-box">
                                        {item.subtitulo}
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        
                </div>
                
                <div className="section-button-vouAprender">
                    <a href="https://pay.hotmart.com/A42461362S?checkoutMode=10" target="_blank" ><button className="primeiro-button-vouAprender">ESTOU PREPARADO</button></ a>
                </div>
                		

            </div>

        </div>
    )
}