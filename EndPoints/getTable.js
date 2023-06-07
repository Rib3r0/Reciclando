// getTabela - NÃO IMPLEMENTADO

export const getTabela = async (tabela) => {

    let url = 'http://localhost:8080/v1/reciclando-educacao/table/'

    let response = await fetch(url,{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(tabela)})

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