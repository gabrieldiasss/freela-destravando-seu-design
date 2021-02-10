/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './quemEJoseph.css'
import Joseph from './rostoJoseph.jpg'
import LogoInstagram from './logotipo-do-instagram.svg'

export default () => {
    return(
        <div className="app-quemEJoseph">

            <div className="pageQuemEJoseph">

                <header>
                    <div className="section-imagemDoJoseph" >
                        <img className="fotoJoseph" src={Joseph} />
                    </div>

                    <div className="textoPrincipal-quemEJoseph">
                        Quem é o <small>Gabriel Joseph?</small>
                    </div>

                </header>

                <div className="texts-quemEJoseph">
                    <div className="primeira-parte-quemEJoseph">
                        <div>
                            Gabriel Joseph é o fundador do treinamento Destravando o seu Design.
                        </div>

                        <div className="espaco">
                            Gabriel trabalhava de carteira assinada (CLT) e nas horas vagas para fazer uma renda extra trabalhava de designer e social media.
                        </div>

                        <div className="espaco" >
                            Aos poucos percebeu que era totalmente possível viver apenas do trabalho de design, pois apenas em seu trabalho de designer já estava ganhando 4 vezes mais do que ganhava trabalhando de carteira assinada.
                        </div>
                    </div>

                    <div className="segunda-parte-quemEJoseph">
                        <div className="espaco-segundaParte" >
                            Ao perceber isso decidiu largar tudo e viver do design.
                        </div>

                        <div className="instagram" >
                            <div className="logo-instagram">
                                <a href="https://www.instagram.com/gabrieljosephoficial/?hl=pt-br" target="_blank"><img src={LogoInstagram} /></a>
                            </div>

                            <div className="texto-instagram">
                                Me siga no instagram!
                            </div>

                        </div>

                        <div className="clique-no-icone">
                            *clique no ícone*
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    )
}