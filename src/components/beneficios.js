/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

import './vouAprender.css'

import './beneficios.css'


export default () => {

    const [boxBeneficios] = useState([
        {modulo: '1° Módulo', titulo: 'Grupo-Vip de Alunos.', subtitulo: 'Você terá acesso há um grupo no Telegram. Se por acaso surgir alguma dúvida, é só pedir ajuda aos outros alunos. '},
        {modulo: '2° Módulo', titulo: 'Acesso vitalício!', subtitulo: 'Você terá acesso vitalício ao curso, assim dá para assistir as aulas no seu tempo.'},
        {modulo: '3° Módulo', titulo: 'Garantia de 7 dias!', subtitulo: 'Até 7 dias depois do pagamento se você não estiver satisfeito, você pode cancelar o curso, e solicitar o dinheiro de volta.'}
    ])

    const [boxBeneficios2] = useState([
        {modulo: '4° Módulo', titulo: '3 bônus exclusivos!', subtitulo: 'Você ganhará acesso a aulas exclusivas, onde eu vou te ensinar a criar carrosséis, criativos e usar o estúdio de criação do instagram.'},
        {modulo: '5° Módulo', titulo: 'Futuras atualizações!', subtitulo: 'Ao longo do tempo, eu irei disponibilizar mais aulas no curso e novos modulos, o melhor é que vai ser tudo GRATUITO!'},
        {modulo: '6° Módulo', titulo: 'Certificado!', subtitulo: 'Completando o curso, você receberá um certificado de participação.'}
    ])

    return(
        <div className="app-beneficios">

            <div className="PageBeneficios">
                <header className="header-Beneficios">
                    Benefícios <small>exclusivos</small> para você<small>:</small>
                </header>

                <div className="todas-box" >
                    <div className="section-box" > 
                        {boxBeneficios.map((item, key) => ( 
                            <div className="box" key={key} >
                                <header>
                                    <div className="background-modulo-beneficios">
                                        <div className="modulo" >
                                            {item.modulo}
                                        </div>
                                    </div>
                                </header>

                                <div className="titulo-box-beneficios">
                                    {item.titulo}
                                </div>

                                <div className="description-box">
                                    {item.subtitulo}
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    <div className="section-box" > 
                        {boxBeneficios2.map((item, key) => ( 
                            <div className="box" key={key} >
                                <header>
                                    <div className="background-modulo-beneficios">
                                        <div className="modulo" >
                                            {item.modulo}
                                        </div>
                                    </div>
                                </header>

                                <div className="titulo-box-beneficios">
                                    {item.titulo}
                                </div>

                                <div className="description-box">
                                    {item.subtitulo}
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                       
            </div>

        </div>
        
    )
}