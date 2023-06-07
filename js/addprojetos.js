
// ------------------------- INICIO SOBRE O INPUT DE IMAGEM --------------------------

// Selecionando Input
const inputFile = document.querySelector("#picture__input");

// Selecionando label
const pictureImage = document.querySelector(".picture__image");

// Texto qualquer
const pictureImageTxt = "Envie a imagem do seu projeto";

// pega o texto guardado na váriavel pictureImageTxt 
// e exibe dentro do container 
pictureImage.innerHTML = pictureImageTxt;

// Esta ouvindo no input quando o valor é alterado, ou seja
// Quando a imagem é inserida, ai depois é passada 
// uma função chamada "e"
const getImagemInserida  = inputFile.addEventListener("change", function (e) {

  // obtem o arquivo/imagem/novo elemento que foi colocado sobre
  // o container para inserir a imagem
  const inputTarget = e.target;

  // Array de arquivos selecionados, nesse caso pegando o primeiro
  // item do array e o adicionando na váriavel file
  const file = inputTarget.files[0];

  // Verifica se o arquivo foi selecionado
  if (file) {
    // Caso o arquivo foi selecionado....

    // é criado uma váriavel que le o conteudo do arquivo/imagem
    const reader = new FileReader();

    // fica uma escuta para ver se o arquivo/ imagem foi carregada
    // caso foi, ele executa a função chamada "e"
    // Depois do arquivo carregado, a função "e" é executada
    // sendo "e" o parametro da função
    reader.addEventListener("load", function (e) {

      // Váriavel criada para obter o alvo do evento o objeto "reader"
      // Ou seja o objeto inserido
      const readerTarget = e.target;

      // Criou um elemento de imagem
      const img = document.createElement("img");

      // resultado da leitura do arquivo do "reader",
      // ou seja, a imagem é carregada no elemento img, utilizando
      //  o método readAsDataUrl(Ler como um dado URL)
      img.src = readerTarget.result;

      // é a estilização da imagem inserida no elemento de imagem
      img.classList.add("picture__img");

      // Limpa o container para não enviar várias imagens
      pictureImage.innerHTML = "";

      // Adicionar essa nova imagem que acabei de criar
      //  e adiciona no container
      pictureImage.appendChild(img);

      // console.log(file)
    });

    // le o arquivo como um dado URL
    reader.readAsDataURL(file);
  } else {
    // Se nenhuma imagem é selecionada ele retorna o texto 
    // para escolher uma imagem
    pictureImage.innerHTML = pictureImageTxt;
  }
});

// ------------------------- FIM SOBRE O INPUT DE IMAGEM --------------------------

const form = document.getElementById('form')

form.addEventListener('submit', function(event){
  
  const sucessoPreenchimentoFormulario = "Formulário preenchido com sucesso!!! Aguarde até entrarmos em contato!!!"
  
  event.preventDefault();

  alert(sucessoPreenchimentoFormulario)
  console.log(sucessoPreenchimentoFormulario)

});