/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

import './vouAprender.css'

import './beneficios.css'


export default () => {

    const [boxBeneficios] = useState([
        {modulo: '1° Bônus', titulo: 'Certificado!', subtitulo: 'Completando o treinamento, você receberá um certificado de participação. '},
        {modulo: '2 Bônus', titulo: 'Acesso por 1 ano!', subtitulo: 'Você terá acesso ao treinamento durante 1 ano, para assistir de qualquer lugar e quando quiser.'},
        {modulo: '3° Bônus', titulo: 'Garantia de 7 dias!', subtitulo: 'Até 7 dias depois do pagamento, se você não estiver satisfeito, você pode cancelar o treinamento e solicitar o dinheiro de volta.'}
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

                </div>
                       
            </div>

        </div>
        
    )
}