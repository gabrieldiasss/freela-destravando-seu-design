/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import Premium from './imgPremium.svg'

import './vouAprender.css'

export default () => {

    const [boxAprender,] = useState([
        {modulo: '1° Módulo', titulo: 'Introdução.', subtitulo: 'Nesse módulo você receberá as boas vindas do produtor e terá informações importantes sobre por onde começar no curso.'},
        {modulo: '2° Módulo', titulo: 'Regras do Design.', subtitulo: 'Você aprenderá sobre tipografia, psicologia das cores, alinhamento contraste e muito mais!'},
        {modulo: '3° Módulo', titulo: 'Photoshop - do básico ao avançado.', subtitulo: 'Nesse módulo você aprenderá do básico ao avançado no Photoshop de uma forma descomplicada!'}
    ])

    const [boxAprender2] = useState([
        {modulo: '4° Módulo', titulo: 'Canva - Do básico ao avançado', subtitulo: 'Nesse módulo você aprenderá tudo para produzir trabalhos incríveis de uma forma profissional usando o Canva.'},
        {modulo: '5° Módulo', titulo: 'Como lidar com clientes.', subtitulo: 'Nesse módulo você vai aprender a como lidar melhor com seus clientes.'},
        {modulo: '6° Módulo', titulo: 'Estúdio de criação do Instagram', subtitulo: 'Nesse módulo você aprenderá a programar publicações no Instagram para serem publicadas de forma automática usando a ferramenta do próprio Instagram.'},

    ])

    const [boxAprender3] = useState([
        {modulo: '7° Módulo', titulo: 'Módulo Premium', subtitulo: 'Nesse módulo você vai aprender técnicas para faturar de R$500 a + de 3 mil reais.'},
        {modulo: 'Bônus', titulo: 'Copywriting', subtitulo: "Nesse módulo exclusivo você vai aprender com o Vitor Magno, o homem que foi responsável por escrever copys que impactou +de 20 milhões de pessoas, 8 dígitos de faturamento com lançamentos, e atualmente trabalha com os tops players do mercado!"}
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
                    <a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button-vouAprender">ESTOU PREPARADO</button></ a>
                </div>
                		

            </div>

        </div>
    )
}