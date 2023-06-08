import { getCompanies } from "../../EndPoints/getCompanies.js";
import { getContribuentesMaterial } from "../../EndPoints/getContribuentes.js";

export const criarTabelaContribuentes = () =>{
    var containerDois = document.getElementById("container-contribuente");
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');
    
    var headers = ['Responsável por doar', 'E-mail', 'Endereço'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headRow.appendChild(th);
    });

    //let contribuentes = getContribuentesMaterial().contribuentes
    //let empresas = getgetCompanies().Companies
    getCompanies
    let data = []

    let empresas = [
        {
            nome     : "Cleber-1",
            cpf      : "1235465498",
            email    : "Cleber@gmail.com",
            telefone : "123456789",
            endereco : "Sãopaulo"
        },
        {
            nome     : "Cleber-2",
            cpf      : "1235465498",
            email    : "Cleber@gmail.com",
            telefone : "123456789",
            endereco : "Sãopaulo"
        },
        {
            nome     : "Cleber-3",
            cpf      : "1235465498",
            email    : "Cleber@gmail.com",
            telefone : "123456789",
            endereco : "Sãopaulo"
        }
    ]

    let contribuentes = [
        {
            nome     : "Cleber",
            cpf      : "1235465498",
            email    : "Cleber@gmail.com",
            telefone : "123456789",
            endereco : "Sãopaulo"
        },
        {
            nome     : "Cleber2",
            cpf      : "1235465498",
            email    : "Cleber@gmail.com",
            telefone : "123456789",
            endereco : "Sãopaulo"
        },
        {
            nome     : "Cleber3",
            cpf      : "1235465498",
            email    : "Cleber@gmail.com",
            telefone : "123456789",
            endereco : "Sãopaulo"
        }
    ]

    contribuentes.forEach(contribuente => {
        data.push([contribuente.nome,contribuente.email,contribuente.endereco])
    })
    empresas.forEach(empresa => {
        data.push([empresa.nome,empresa.email,empresa.endereco])
    })

    
    // var data = [
    //     ['nome', 'E-mail', 'info'],
    //     ['nome', 'E-mail', 'info'],
    //     ['nome', 'E-mail', 'info'],
    //     ['nome', 'E-mail', 'info'],
    //     ['nome', 'E-mail', 'info'],
    // ];
    
    data.forEach(function (rowData) {
        var row = document.createElement('tr');
    
        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
    
        tbody.appendChild(row);
    });
    
    thead.appendChild(headRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    containerDois.appendChild(table);
}
