// Cadastro de Funcionário - FUNCIONAL \0/

export const getCadastro = async (cadastro) => {

    let url = `http://localhost:8080/v1/reciclando-educacao/cadastro`

    let response = await fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cadastro)})

    let cadastroResponse = await response.json()

    return cadastroResponse

}