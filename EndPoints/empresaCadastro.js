// Cadastro de empresa - EM TESTE...

export const getCadastroEmpresa = async (cadastroEmpresa) => {

    let url = `http://localhost:8080/v1/reciclando-educacao/empresas`

    let response = await fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cadastroEmpresa)})

    let cadastroEmpresaResponse = await response.json()

    return cadastroEmpresaResponse

}