// Criar login - NÃO IMPLEMENTADO 

export const getCriarLogin = async (cadastroLogin) => {

    let url = 'http://localhost:8080/v1/reciclando-educacao/cadastro'

    let response = await fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cadastroLogin)})

    let cadastroLoginResponse = await response.json()

    return cadastroLoginResponse

}