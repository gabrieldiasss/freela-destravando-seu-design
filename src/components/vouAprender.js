/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import Premium from './imgPremium.svg'

import './vouAprender.css'

export default () => {

    const [boxAprender,] = useState([
        {modulo: '1° Módulo', titulo: 'Introdução.', subtitulo: 'Nesse módulo você receberá as boas vindas do produtor e terá informações importantes sobre por onde começar no curso.'},
        {modulo: '2° Módulo', titulo: 'Regras do Design.', subtitulo: 'Você aprenderá sobre tipografia, psicólogia das cores, alinhamento contraste e muito mais! Tudo que um designer precisa saber para fazer trabalhos incríveis!'},
        {modulo: '3° Módulo', titulo: 'Photoshop.', subtitulo: 'Nesse módulo você aprenderá do básico ao avançado no photoshop de uma forma descomplicada!'}
    ])

    const [boxAprender2] = useState([
        {modulo: '4° Módulo', titulo: 'Use o Canva de forma profissional.', subtitulo: 'Nesse módulo você aprenderá tudo para produzir trabalhos incríveis de uma forma profissional usando o Canva.'},
        {modulo: '5° Módulo', titulo: 'Nunca mais tome calote de cliente!', subtitulo: 'Aprenda a nunca mais tomar calotes, ser enganado ou não ser pago pelas suas artes. '},
        {modulo: '6° Módulo', titulo: 'Estúdio de criação do Instagram', subtitulo: 'Nesse módulo você aprenderá a programar publicações no Instagram para serem publicadas de forma automática usando a ferramenta do próprio Instagram.'},

    ])

    const [boxAprender3] = useState([
        {modulo: '7° Módulo', titulo: 'Módulo Premium', subtitulo: 'Nesse módulo você vai aprender técnicas para faturar de R$500 a + de 3 mil reais.'},

    ])

    return(


        <div className="app-vouAprender">

            <div className="PageVouAprender">
                <header className="header-vouAprender" >
                    Quais são os <small>módulos</small> do curso<small>?</small>
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

                        <div className="section-box" > 
                            {boxAprender3.map((item, key) => ( 
                                <div className="box" key={key} >
                                    <header>
                                        <div className="background-modulo-beneficios">
                                            <div className="modulo" >
                                                {item.modulo}
                                            </div>
                                        </div>

                                        <div className="logoPremium">
                                            <img className="porDentroDaLogo" src={Premium} />
                                        </div>
                                    </header>

                                    <div className="tituloBoxPremium">
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
                    <button className="primeiro-button-vouAprender">QUERO PARTICIPAR</button>
                </div>
                		

            </div>

        </div>
    )
}