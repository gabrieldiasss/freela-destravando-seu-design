/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import Logo from './components/logo-tr.png'
import PageGanheDinheiro from './components/ganheDinheiro.js'
import ChegaDeSofrer from './components/chegaDeSofrer.js'
import QuemEJoseph from './components/quemEJoseph.js'
import VouAprender from './components/vouAprender.js'
import Exemplo from './components/exemplos.js'
import Beneficios from './components/beneficios.js'
import Promocao from './components/promocao.js'

import ReactPlayer from 'react-player'
import Helmet from "react-helmet"

import './App.css';

export default () => {
    return(

		<div className="app">

			<Helmet>
				<title>Destravando seu Design</title>

				<meta 
					itemprop="description" 
					content="O treinamento Destravagns!" 
				/>

			</Helmet>

			<div className="page1" >
				<header>
					<img className="logo-design" src={Logo} />
				</header>

				<div className="titulo-principal-1">
					<h2 className="chamar-atencao">GANHE DE <small>R$1500 A + DE R$3000 POR MÊS</small> COM SEUS DESIGNS<small>.</small></h2>
				</div>

				<div className="segunda-parte" >
					<div className="text-segunda-parte">Você está cansado de ficar criando conteúdo na internet para atrair mais clientes e isso não tem dado retorno algum? Eu posso te ajudar a resolver esse problema!</div>						
				</div>

				<div className="video">
					<ReactPlayer className="videozao" width='860px' height='530px' controls url='https://youtu.be/R9xMFMFscQI' />
				</div>

				<div className="sectionButtonPage1" >
					<a href="https://pay.hotmart.com/A42461362S" target="_blank" ><button className="primeiro-button">QUERO PARTICIPAR</button></a>
				</div>
				
			</div>

			<svg  className="wavesss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
			</svg>

			<div className="page2" >
				<PageGanheDinheiro />
			</div>

			<svg className="wavesss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>

			<div className="page3">
				<ChegaDeSofrer />
			</div>	

			<svg  className="wavesss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
			</svg> 
			
			<div className="page4">
				<QuemEJoseph />
			</div>

			<svg className="wavesss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>

			
			<div>
				<VouAprender />
			</div>
			
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
			</svg>

			<div className="Page4">
				<Exemplo />
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
			</svg>

			<div>
				<Beneficios />
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
  				<path fill="#141416" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
			</svg>

			<div>
				<Promocao />
			</div>

    	</div>
    )
}

/* Em cima 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg> */

/* em baixo
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg> */