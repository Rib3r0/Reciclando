// Login - FUNCIONAL \0/

export const getValidateLogin = async (ValidateLogin) => {

    let url = `http://localhost:8080/v1/reciclando-educacao/login?nome=${ValidateLogin.nome}&senha=${ValidateLogin.senha}`

    let response = await fetch(url)

    let validateLoginResponse = await response.json()

    return validateLoginResponse

}