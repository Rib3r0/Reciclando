'use strict'
import { criarTabelaControle } from './tabela__controle.js';
import { criarTabelaMaterial } from './tabela__material.js';
import { criarTabelaContribuentes } from './tabela__contribuentes.js';
import { dataPicker } from './datapicker.js';

const segundoRoutes = {
    '/login'                    :       './pages/login.html',
    '/home'                     :       './AcessoRestrito/segundoPages/segundoIndex.html',
    '/controle'                 :       './AcessoRestrito/segundoPages/controle.html',
    '/material'                 :       './AcessoRestrito/segundoPages/material.html',
    '/contribuentes'            :       './AcessoRestrito/segundoPages/contribuentes.html',
    '/cadastro__materiais'      :       './AcessoRestrito/segundoPages/cadastro__materiais.html',
    '/cadastro__empresa'        :       './AcessoRestrito/segundoPages/cadastro__empresa.html',
    '/adicionar__materiais'     :       './AcessoRestrito/segundoPages/adicionar__materiais.html'
}

const segundoRoute = async () => {
    


    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    console.log(path);
    
    const segundoRoute = segundoRoutes[path]
    const response = await fetch(segundoRoute)
    const html = await response.text()

    document.getElementById('root').innerHTML = html
    
    if(path == "/controle"){
        criarTabelaControle()
        dataPicker()
    }
    if(path == "/material"){
        criarTabelaMaterial()
    }
    if(path == "/contribuentes"){
        criarTabelaContribuentes()
    }
}

window.segundoRoute = segundoRoute