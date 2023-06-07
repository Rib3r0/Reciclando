// Retorno dos materiais pelo nome - NÃO IMPLEMENTADO

export const getMaterialByName = async(nomeMaterial) =>{

    const url = `http://localhost:8080/v1/reciclando-educacao/materials/?nome=${nomeMaterial}`

    const response = await fetch(url)

    const responseMaterialByName = await response.json()
 
    return{
        ...responseMaterialByName
    }
}