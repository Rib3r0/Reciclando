import { getCompanies } from "../../EndPoints/getCompanies.js";
import { getContribuentesMaterial } from "../../EndPoints/getContribuentes.js";

export const criarTabelaContribuentes = async () =>{
  
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


    let contribuentes = await getContribuentesMaterial()
    let empresas = await getCompanies()
    console.log(await getCompanies());

    let data = []


    contribuentes.contribuentes.forEach(contribuente => {
        data.push([contribuente.nome,contribuente.email,contribuente.id_endereco])
    })
    empresas.Companies.forEach(empresa => {
        data.push([empresa.nome,empresa.email,empresa.id_endereco])
    })

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
