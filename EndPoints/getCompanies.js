//  Companies - NÃO IMPLEMENTADO 

export const getCompanies = async () =>{

    const url = 'http://localhost:8080/v1/reciclando-educacao/contribuentes/'

    const response = await fetch(url)

    const responseCompanie = await response.json()
 
    return{
        ...responseCompanie
    }
}


//  Companies pelo ID - NÃO IMPLEMENTADO 

export const getCompaniesById = async (idCompanie) =>{

    const url = `http://localhost:8080/v1/reciclando-educacao/empresas/?id=${idCompanie}`

    const response = await fetch(url)

    const responseCompanieById = await response.json()
 
    return{
        ...responseCompanieById
    }

}