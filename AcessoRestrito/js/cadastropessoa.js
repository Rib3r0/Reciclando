import { getCadastro } from "../../EndPoints/cadastro.js";

const form = document.getElementById("form-material");
export function handleSubmitCadastroPessoa(event) {
    event.preventDefault();
    checkFormPessoaCadastrada()
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    //form.addEventListener("submit", handleSubmit);
  });



function checkInputNomePessoa(){
  const nomePessoa = document.getElementById("nome__pessoa__cadastrada");
  const nomePessoaValue = nomePessoa.value;

  if(nomePessoaValue == ""){
    errorInput(nomePessoa, "Preencha o seu nome")
  }else{
    const formItem = nomePessoa.parentElement;
    formItem.className = "form-content-pessoa-cadastrada"
    return true
  }

}


function checkInputEmailPessoa(){
    const emailPessoa = document.getElementById("email__pessoa__cadastrada");
    const emailPessoaValue = emailPessoa.value;
  
    if(emailPessoaValue == ""){
      errorInput(emailPessoa, "Preencha o seu endereço de E-mail")
    }else{
      const formItem = emailPessoa.parentElement;
      formItem.className = "form-content-pessoa-cadastrada"
      return true
    }
  
  }

function checkInputTelefonePessoa(){
  const telefonePessoa = document.getElementById("telefone__pessoa");
  const telefonePessoaValue = telefonePessoa.value;

  if(telefonePessoaValue == ""){
    errorInput(telefonePessoa, "Preencha o seu número de telefone")
  }else{
    const formItem = telefonePessoa.parentElement;
    formItem.className = "form-content-pessoa-cadastrada"
    return true
  }


}


function checkInputSenhaPessoa(){
  const senhaPessoa = document.getElementById("senha__pessoa");
  const senhaPessoaValue = senhaPessoa.value;

  if(senhaPessoaValue == ""){
    errorInput(senhaPessoa, "Preencha a senha")
  }else{
    const formItem = senhaPessoa.parentElement;
    formItem.className = "form-content-pessoa-cadastrada"
    return true
  }


}


  
function checkInputCepPessoa(){
    const cepPessoa = document.getElementById("cep__pessoa");
    const cepPessoaValue = cepPessoa.value;
  
    if(cepPessoaValue == ""){
      errorInput(cepPessoa, "Preencha o CEP")
    }else{
      const formItem = cepPessoa.parentElement;
      formItem.className = "form-content-pessoa-cadastrada"
      return true
    }
  
}

function checkInputSelect(){
  const selectEstadoPessoa = document.getElementById("select_estado_pessoa");
  
  if(selectEstadoPessoa.value == "" ){
  }else{
    return true
  }
}


const checkFormPessoaCadastrada = async () =>  {
  if(checkInputNomePessoa() &&
  checkInputEmailPessoa() &&
  checkInputTelefonePessoa() &&
  checkInputSenhaPessoa() &&
  checkInputCepPessoa() &&
  checkInputSelect()){
    const nomePessoa = document.getElementById("nome__pessoa__cadastrada");
    const nomePessoaValue = nomePessoa.value;
    const emailPessoa = document.getElementById("email__pessoa__cadastrada");
    const emailPessoaValue = emailPessoa.value;
    const senhaPessoa = document.getElementById("senha__pessoa");
    const senhaPessoaValue = senhaPessoa.value;

    let cadastro = {
      nome : nomePessoaValue,
      email : emailPessoaValue,
      senha : senhaPessoaValue
    }

    await getCadastro(cadastro)
    alert('Cadastrado do funcionário com sucesso!')
  }



}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content-pessoa-cadastrada error"

}

window.checkFormPessoaCadastrada = checkFormPessoaCadastrada