'use strict'



// const routes = {
//     '/'                :       '../pages/inicio.html',
//     '/projetos'        :       '../pages/projetos.html',
//     '/empresas'        :       '../pages/empresas.html',
//     '/sobre_nos'       :       '../pages/sobre_nos.html',
//     '/pontos_coleta'   :       '../pages/pontos_coleta.html',
//     '/faca_parte'      :       '../pages/faca_parte.html'
// }

// const route = async () => {
//     window.event.preventDefault()
//     window.history.pushState({}, "", window.event.target.href)

//     const path = window.location.pathname
//     const route = routes[path]
//     const response = await fetch(route)
//     const html = await response.text()

//     document.getElementById('root').innerHTML = html



//     document.addEventListener("DOMContentLoaded", function() {
//         // Resto do seu código
      
//         // Chamar a função initializeCarousel quando apropriado
//         if (path == '/projetos') {
//           initializeCarousel();
//         }
//       });
    
//     console.log(html)


// }

// window.route = route

import { handleSubmit } from './cadastroempresa.js';

const routes = {
    '/'                :       './pages/inicio.html',
    '/projetos'        :       './pages/projetos.html',
    '/empresas'        :       './pages/empresas.html',
    '/sobre_nos'       :       './pages/sobre_nos.html',
    '/pontos_coleta'   :       './pages/pontos_coleta.html',
    '/faca_parte'      :       './pages/faca_parte.html',
    '/login'           :       './pages/login.html'

}

// function initializeCarousel() {

//     let count = 1;
  
//     const valorRadio = document.getElementById("radio1");
  
//     if (valorRadio != null) {
//       valorRadio.checked = true;
//     } else {
//       console.log("Elemento com ID 'radio1' não encontrado.");
//     }
  
//     function nextImage() {
  
//       if (count > 4) {
//         count = 1;
//       }
  
      
//       count++;
  
//       const radio = document.getElementById("radio" + count);
//       if (radio != null) {
//         radio.checked = true;
//       } else {
//         console.log("Elemento com ID 'radio" + count + "' não encontrado.");
//       }
//     }
  
//     const getSlides = setInterval(nextImage, 3000);
//   }


export const route = async () => {
    
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const route = routes[path]
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html



    document.addEventListener("DOMContentLoaded", function() {
        // Resto do seu código
      
        // Chamar a função initializeCarousel quando apropriado
        if (path == '/projetos') {
          initializeCarousel();
        }else if(path == '/faca_parte'){
            handleSubmit();
        }
    });
    
    console.log(html)
}

window.route = route