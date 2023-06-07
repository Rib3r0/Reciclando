import { getCadastroEmpresa } from "../EndPoints/empresaCadastro.js";

const form = document.getElementById("form");
export function handleSubmit(event) {
    event.preventDefault();
    checkForm() 

    
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    //form.addEventListener("submit", handleSubmit);
  });



function checkInputNomeEmpresa(){
  const nomeEmpresa = document.getElementById("nome__empresa");
  const nomeEmpresaValue = nomeEmpresa.value;

  if(nomeEmpresaValue == ""){
    errorInput(nomeEmpresa, "Preencha o nome da empresa.")
  }else{
    const formItem = nomeEmpresa.parentElement;
    formItem.className = "form-content"
    return true
  }

}


function checkInputCnpj(){
    const cnpj = document.getElementById("cnpj");
    const cnpjValue = cnpj.value;
  
    if(cnpjValue == ""){
      errorInput(cnpj, "Preencha o CNPJ.")
    }else{
      const formItem = cnpj.parentElement;
      formItem.className = "form-content"
      return true
    }
  
  }

function checkInputEmail(){
  const email = document.getElementById("email");
  const emailValue = email.value;

  if(emailValue == ""){
    errorInput(email, "Preencha o email.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
    return true
  }


}


function checkInputTelefone(){
  const telefone = document.getElementById("telefone");
  const telefoneValue = telefone.value;

  if(telefoneValue == ""){
    errorInput(telefone, "Preencha o número telefone.")
  }else{
    const formItem = telefone.parentElement;
    formItem.className = "form-content"
    return true
  }


}



function checkInputNumeroWhatsapp(){
    const numeroWhatsapp = document.getElementById("numero__whatsapp");
    const numeroWhatsappValue = numeroWhatsapp.value;
  
    if(numeroWhatsappValue == ""){
      errorInput(numeroWhatsapp, "Preencha o número de whatsapp.")
    }else{
      const formItem = numeroWhatsapp.parentElement;
      formItem.className = "form-content"
      return true
    }
  
}

  
function checkInputCep(){
    const cep = document.getElementById("cep");
    const cepValue = cep.value;
  
    if(cepValue == ""){
      errorInput(cep, "Preencha o CEP.")
    }else{
      const formItem = cep.parentElement;
      formItem.className = "form-content"
      return true
    }
  
}

// function checkInputSelectTodos(){
//   const selectEstado = document.getElementById("select_estado");
//   const selectMaterial = document.getElementById("select_material");
//   const selectPeriodo = document.getElementById("select_periodo");

//   const selectEstadoValue = selectEstado.value
//   const selectMaterialValue = selectMaterial.value
//   const selectPeriodoValue = selectPeriodo.value

  

//   if(
//     selectEstadoValue == "" || selectMaterialValue == "" || selectPeriodoValue == ""  ||
//     selectEstadoValue == undefined || selectMaterialValue == undefined || selectPeriodoValue == undefined ||
//     selectEstadoValue == "undefined" || selectMaterialValue == "undefined" || selectPeriodoValue == "undefined" ||
//     selectEstadoValue == null || selectMaterialValue == null || selectPeriodoValue == null ||
//     selectEstadoValue == "null" || selectMaterialValue == "null" || selectPeriodoValue == "null"
  
//   ){
//   }else{
//     return true
//   }
// }

function checkInputSelectEstado(){
  const selectEstado = document.getElementById("select_estado");
  const selectEstadoValue = selectEstado.value
  
  if(
    selectEstadoValue == "" || 
    selectEstadoValue == undefined || 
    selectEstadoValue == "undefined" || 
    selectEstadoValue == null || 
    selectEstadoValue == "null" 
  
  ){
  }else{
    return true
  }
}

function checkInputSelectMaterial(){
  
  const selectMaterial = document.getElementById("select_material");
  const selectMaterialValue = selectMaterial.value
  
  if(
     selectMaterialValue == "" ||   
     selectMaterialValue == undefined || 
     selectMaterialValue == "undefined" || 
     selectMaterialValue == null || 
     selectMaterialValue == "null" 
  
  ){
  }else{
    return true
  }
}

function checkInputSelectPeriodo(){
  
  const selectPeriodo = document.getElementById("select_periodo");
  const selectPeriodoValue = selectPeriodo.value

  if(
    selectPeriodoValue == ""  ||
    selectPeriodoValue == undefined ||
    selectPeriodoValue == "undefined" ||
    selectPeriodoValue == null ||
    selectPeriodoValue == "null"
  
  ){
  }else{
    return true
  }
}


const checkForm = async () => {
  if(checkInputNomeEmpresa() &&
  checkInputCnpj() &&
  checkInputEmail() &&
  checkInputTelefone()&&
  checkInputNumeroWhatsapp()&&
  checkInputCep() &&
  checkInputSelectEstado() &&
  checkInputSelectMaterial() &&
  checkInputSelectPeriodo() ){
    const nomeEmpresa = document.getElementById("nome__empresa");
    const nomeEmpresaValue = nomeEmpresa.value;
    const cnpj = document.getElementById("cnpj");
    const cnpjValue = cnpj.value;
    const email = document.getElementById("email");
    const emailValue = email.value;
    const telefone = document.getElementById("telefone");
    const telefoneValue = telefone.value;

    const selectEstado = document.getElementById("select_estado");
    const selectEstadoValue = selectEstado.value

    const selectMaterial = document.getElementById("select_material");
    const selectMaterialValue = selectMaterial.value

    const selectPeriodo = document.getElementById("select_periodo");
    const selectPeriodoValue = selectPeriodo.value


    // OBSERVAÇÃO 1 - PROVAVELMENTE FUNCIONA
        // Consegui fragmentar os Select(Combobox) para pegar/validar individualmente ,
        // Assim a função consegue validar individualmente antes de fazer a requisição com o servidor
        // Pois um possivel problema era que quando voce clicava no botão de enviar preenchendo somente
        // um combobox, ele ja tentava fazer a requisição com o BANCO DADOS, porém como só
        // tinha as informações de um combobox, o FrontEnd não conseguia fazer requisição com o servidor
           //  checkInputSelectEstado() 
           //  checkInputSelectMaterial()
           //  checkInputSelectPeriodo()

    // OBSERVAÇÃO 2 - possivel problema
        // eu percebi que no BackEnd, tem uma função para validar o cadastro da empresa, então eu implementei
                         // responseCadastroEmpresa.accountValidate
        
        
        //aqui o código do backEnd  
        // const createCompanie = async function(cadastro){

            //  if(typeof cadastro.nome === 'string' && typeof cadastro.cnpj === 'string' && typeof cadastro.email === 'string'){
            //      let createRequest = await empresasDAO.criarEmpressa(cadastro)
// ----->>  //        return {status : 200 , accountValidate : createRequest}
            //      }else{
            //          return {status: 415, message: 'Todos os dados do cadastro precisam ser em String.'}
            //      }
            //  }
       
    

  let validateCadastroEmpresaa = {
    nome     : nomeEmpresaValue,
    cnpj     : cnpjValue,
    email    : emailValue,
    telefone : telefoneValue,
    endereco : selectEstadoValue,
    material : selectMaterialValue,
    periodo  : selectPeriodoValue
  }

  let responseCadastroEmpresa = await getCadastroEmpresa(validateCadastroEmpresaa)

  if(responseCadastroEmpresa.accountValidate){
    alert('Cadastrado enviado com sucesso! Aguarde nosso retorno!')
    window.location.replace("./index.html")
  }else{
    alert("NAO FOI")
  }

  }

}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}



window.checkForm= checkForm


