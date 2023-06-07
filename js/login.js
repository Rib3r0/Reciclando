import { getValidateLogin } from "../EndPoints/validateLogin.js";

const form = document.getElementById("form__login");
export function handleSubmitLogin(event) {
    event.preventDefault();
    checkFormLogin()
  }
  
function checkInputNomeLogin(){
  const nomeLogin = document.getElementById("nome__login");
  const nomeLoginValue = nomeLogin.value;

  if(nomeLoginValue == ""){
    errorInputLogin(nomeLogin, "Preencha o seu nome")
  }else{
    const formItem = nomeLogin.parentElement;
    formItem.className = "form-content-login"
    return true
  }

}


function checkInputSenhaLogin(){
    const senhaLogin = document.getElementById("senha__login");
    const senhaLoginValue = senhaLogin.value;
  
    if(senhaLoginValue == ""){
      errorInputLogin(senhaLogin, "Preencha a senha corretamente.")
    }else{
      const formItem = senhaLogin.parentElement;
      formItem.className = "form-content-login"
      return true
    }
  
}


const checkFormLogin = async () =>{
  if(checkInputNomeLogin() &&
  checkInputSenhaLogin()){

    const nomeLogin = document.getElementById("nome__login");
    const nomeLoginValue = nomeLogin.value;

    const senhaLogin = document.getElementById("senha__login");
    const senhaLoginValue = senhaLogin.value;

    let validateLogin = {
      nome  : nomeLoginValue,
      senha : senhaLoginValue,
      
    }

    let loginResponse = await getValidateLogin(validateLogin)
    const botaoLogin = document.getElementById("botao_login");
    console.log(loginResponse);
    if(loginResponse.accountValidate){

      window.location.replace("./AcessoRestrito/segundoIndex.html")
      alert('Logado com sucesso!')
    }else{
      alert("Falha no login")
    }

    
  }



}


function errorInputLogin(input, message){
  const formItem = input.parentElement;
  const textMessageLogin = formItem.querySelector("a")

  textMessageLogin.innerText = message;

  formItem.className = "form-content-login error"

}

window.checkFormLogin = checkFormLogin