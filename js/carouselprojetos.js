

// document.addEventListener("DOMContentLoaded", function() {

//     let count = 1;

//     document.getElementById("radio1")


// const getSlides = setInterval( function(){
//     nextImage()
// }, 3000)

// function nextImage(){
//     count++
//     if(count>4){
//         count = 1;
//     }

//     document.getElementById("radio"+count).checked = true;
// }
//   });

//  TENTAIVA 2

//   document.addEventListener("DOMContentLoaded", function() {
//     let count = 1;
    
//     let valorRadio = document.getElementById("radio1")

//     let radioVerificado = checked = true
  
//     if(valorRadio === radioVerificado ){
//         return true
//     }else if(valorRadio != radioVerificado){
//         console.log("Erro no rádio")
//     }

//     const getSlides = setInterval(nextImage, 3000);
  
//     function nextImage() {
//       count++;
//       if (count > 4) {
//         count = 1;
//       }
  
//       document.getElementById("radio" + count).checked = true;
//     }
//   });


// TENTATIVA 3

// document.addEventListener("DOMContentLoaded", function() {

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

// });

// tentativa 4 -- FUNCIONA

window.initializeCarousel = function() {
    let count = 1;
  
    const valorRadio = document.getElementById("radio1");
  
    if (valorRadio != null) {
      valorRadio.checked = true;
    } else {
      console.log("Elemento com ID 'radio1' não encontrado.");
    }
  
    function nextImage() {
  
      if (count > 4) {
        count = 1;
      }
  
      count++;
  
      const radio = document.getElementById("radio" + count);
      if (radio != null) {
        radio.checked = true;
      } else {
        console.log("Elemento com ID 'radio" + count + "' não encontrado.");
      }
    }
  
    const getSlides = setInterval(nextImage, 3000);
  }