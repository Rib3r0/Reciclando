import { getInserirMaterial } from "../../EndPoints/materialCadastro.js";

const form = document.getElementById("form-material");
export function handleSubmitInserirMaterial(event) {
    event.preventDefault();
    checkFormValidarInsercaoMaterial()
  }
  

function checkInputNomeContribuente(){
  const nomeContribuinte = document.getElementById("nome__contribuidor__material");
  const nomeContribuinteValue = nomeContribuinte.value;

  if(nomeContribuinteValue == ""){
    errorInput(nomeContribuinte, "Preencha o seu nome")
  }else{
    const formItem = nomeContribuinte.parentElement;
    formItem.className = "form-entrega-material"
    return true
  }

}


function checkInputQuantidadeMaterial(){
    const quantidadeMaterial = document.getElementById("quantidade__material__inserido");
    const quantidadeMaterialValue = quantidadeMaterial.value;
  
    if(quantidadeMaterialValue == ""){
      errorInput(quantidadeMaterial, "Preencha a quantidade de material")
    }else{
      const formItem = quantidadeMaterial.parentElement;
      formItem.className = "form-entrega-material"
      return true
    }
  
}

function checkInputEntregaMaterial(){
  const entregaMaterial = document.getElementById("local__material__entregue");
  const entregaMaterialValue = entregaMaterial.value;

  if(entregaMaterialValue == ""){
    errorInput(entregaMaterial, "Informe o local de entrega")
  }else{
    const formItem = entregaMaterial.parentElement;
    formItem.className = "form-entrega-material"
    return true
  }

}


function checkInputSelectTipoMaterial(){
  const selectTipoMaterial = document.getElementById("selecao__inserir__tipo__material");
  const selectTipoMaterialValue = selectTipoMaterial.value

  if(  
    selectTipoMaterialValue == ""  ||
    selectTipoMaterialValue == undefined ||
    selectTipoMaterialValue == "undefined" ||
    selectTipoMaterialValue == null ||
    selectTipoMaterialValue == "null" ){
  }else{
    return true
  }
}


const checkFormValidarInsercaoMaterial = async () =>{
  if(checkInputNomeContribuente() &&
  checkInputQuantidadeMaterial() &&
  checkInputEntregaMaterial() &&
  checkInputSelectTipoMaterial()){
    
    const nomeContribuinte = document.getElementById("nome__contribuidor__material");
    const nomeContribuinteValue = nomeContribuinte.value;
    
    const quantidadeMaterial = document.getElementById("quantidade__material__inserido");
    const quantidadeMaterialValue = quantidadeMaterial.value;
    
    const entregaMaterial = document.getElementById("local__material__entregue");
    const entregaMaterialValue = entregaMaterial.value;

    const selectTipoMaterial = document.getElementById("selecao__inserir__tipo__material");
    const selectTipoMaterialValue = selectTipoMaterial.value


    // Os nomes eu mesmo que fiz pois não sabia qual era o JSON já que eu não tinha o postman

    let validateInserirMaterial = {
      nome         :   nomeContribuinteValue,
      quantidade   :   quantidadeMaterialValue,
      local        :   entregaMaterialValue,
      material     :   selectTipoMaterialValue
    }
    console.log(quantidadeMaterialValue);
    
    let responseInserirMaterial = await getInserirMaterial(validateInserirMaterial)
    console.log(responseInserirMaterial);

    if(responseInserirMaterial.created){
        window.location.replace("./AcessoRestrito/segundoIndex.html")
        alert('Material inserido sucesso!!!')
    }else{
      alert("NAO FOI")
    }
        
  
    
  }



}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-entrega-material error"

}

window.checkFormValidarInsercaoMaterial = checkFormValidarInsercaoMaterial