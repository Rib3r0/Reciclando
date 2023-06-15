// getTabela - NÃO IMPLEMENTADO

export const getTabela = async () => {

    let url = 'http://localhost:8080/v1/reciclando-educacao/table/?start=2023-05-01&end=2023-11-12'

    let response = await fetch(url)

    let tabelaResponse = await response.json()

    return tabelaResponse

}

// postTabela - NÃO IMPLEMENTADO

export const getPostTabela = async (criarTabela) => {

    let url = 'http://localhost:8080/v1/reciclando-educacao/table/'

    let response = await fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(criarTabela)})

    let criarTabelaResponse = await response.json()

    return criarTabelaResponse

}