//  Contribuentes dos materiais - NÃO IMPLEMENTADO 

export const getContribuentesMaterial = async () =>{

    const url = 'http://localhost:8080/v1/reciclando-educacao/contribuentes/'

    const response = await fetch(url)

    const responseContribuenteMaterial = await response.json()
 
    return{
        ...responseContribuenteMaterial
    }
}


//  Contribuentes dos materiais pelo ID - NÃO IMPLEMENTADO 

export const getContribuentesMaterialById = async (idContribuente) =>{

    const url = `http://localhost:8080/v1/reciclando-educacao/contribuentes/?id=${idContribuente}`

    const response = await fetch(url)

    const responseContribuenteMaterial = await response.json()
 
    return{
        ...responseContribuenteMaterial
    }

}
