import { getCompanies } from "../../EndPoints/getCompanies.js";
import { getContribuentesMaterial } from "../../EndPoints/getContribuentes.js";

export const criarTabelaContribuentes = () => {
    var containerDois = document.getElementById("container-contribuente");
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');

    var table = document.createElement('table');
table.classList.add('responsive-table');


    var headers = ['Responsável por doar', 'E-mail', 'Endereço'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headRow.appendChild(th);
    });

    let empresas = [
        {
            nome: "Cleber-1",
            cpf: "1235465498",
            email: "Cleber@gmail.com",
            telefone: "123456789",
            endereco: "Sãopaulo"
        },
        // ...
    ];

    let contribuentes = [
        {
            nome: "Cleber",
            cpf: "1235465498",
            email: "Cleber@gmail.com",
            telefone: "123456789",
            endereco: "Sãopaulo"
        },
        // ...
    ];

    let data = [];

    contribuentes.forEach(contribuente => {
        data.push([contribuente.nome, contribuente.email, contribuente.endereco]);
    });

    empresas.forEach(empresa => {
        data.push([empresa.nome, empresa.email, empresa.endereco]);
    });

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
    table.classList.add('responsive-table');
}
