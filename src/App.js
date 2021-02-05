/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Logo from './components/logo-tr.png'

import './App.css';

export default () => {
    return(
		<div className="app">
			<header>
				<img className="logo-design" src={Logo} />
			</header>

			<div className="titulo-principal-1">
				<h2>Aprenda <small className="chamar-atencao">de forma rápida</small> a criar seus designs<small className="pontos">.</small></h2>
			</div>

			

    	</div>
    )
}
