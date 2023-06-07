// Cadastro de contribuente - NÃO IMPLEMENTADO

export const getCadastroContribuente = async (cadastroContribuente) => {

    let url = `http://localhost:8080/v1/reciclando-educacao/contribuentes/`

    let response = await fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cadastroContribuente)})

    let cadastroContribuenteResponse = await response.json()

    return cadastroContribuenteResponse

}