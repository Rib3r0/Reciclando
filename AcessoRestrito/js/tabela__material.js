import { getMaterial } from "../../EndPoints/getMaterials.js";

export const criarTabelaMaterial = async () =>{
    var containerTres = document.getElementById("container-material");
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');

    var table = document.createElement('table');
table.classList.add('responsive-table');


    var headers = ['Material', 'Quantidade de material arrecadado'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headRow.appendChild(th);
    });


    const materias = await getMaterial()

    var data = []

    materias.materials.forEach(material => {
            data.push([material.tipo_material, material.quantidade]) 
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
    containerTres.appendChild(table);
    table.classList.add('responsive-table');
}
