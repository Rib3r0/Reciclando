// Cadastro de material - EM TESTE...


export const getInserirMaterial = async (InserirMaterial) => {

    let url = `http://localhost:8080/v1/reciclando-educacao/table/`

    let response = await fetch(url,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(InserirMaterial)})

    let InserirMaterialResponse = await response.json()

    return InserirMaterialResponse

}














