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
                        Quem é <small>Gabriel Joseph?</small>
                    </div>

                </header>

                <div className="texts-quemEJoseph">
                    <div className="primeira-parte-quemEJoseph">

                        <div>
                            Gabriel Joseph é o criador do treinamento Destravando o seu Design.
                        </div>

                        <div className="espaco">
                            Dedico esse treinamento a todos aqueles que um dia foi considerado a ovelha negra da família apenas por pensar diferente e não querer seguir o caminho tradicional.
                        </div>

                        <div className="espaco">
                            Sempre fui julgado por pensar diferente, e por diversas vezes escutei as pessoas dizerem que eu era a ovelha negra da família e que não teria futuro em trabalho nenhum, somente quem já passou por alguma situação semelhante a minha vai entender.
                        </div>

                        <div className="espaco" >
                            Eu trabalhava de carteira assinada (CLT) e nas horas vagas para fazer uma renda extra trabalhava de designer e social media.
                        </div>
                    </div>

                    <div className="segunda-parte-quemEJoseph">
                        <div className="espaco-segundaParte" >
                        Aos poucos percebi que era totalmente possível viver apenas do trabalho de design, pois apenas em meu trabalho de designer já estava fazendo 4 vezes mais do que eu ganhava trabalhando de carteira assinada.
                        </div>

                        <div className="instagram" >
                            <a href="https://www.instagram.com/gabrieljosephoficial/?hl=pt-br" target="_blank"><img className="logo-instagram" src={LogoInstagram} /></a>
                           
                            <div className="texto-instagram">
                                <a href="https://www.instagram.com/gabrieljosephoficial/?hl=pt-br" target="_blank">Me siga no Instagram!</a>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>

        </div>
    )
}