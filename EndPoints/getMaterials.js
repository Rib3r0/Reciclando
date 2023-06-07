// Retorno dos materiais - NÃO IMPLEMENTADO

export const getMaterial = async() =>{

    const url = 'http://localhost:8080/v1/reciclando-educacao/materials/'

    const response = await fetch(url)

    const responseMaterial = await response.json()
 
    return{
        ...responseMaterial
    }
}









