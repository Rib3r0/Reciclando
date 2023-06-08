import { getMaterial } from "../../EndPoints/getMaterials.js";


export const criarTabelaMaterial = () =>{
    var containerTres = document.getElementById("container-material");
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');
    
    var headers = ['Material', 'Quantidade de material arrecadado'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headRow.appendChild(th);
    });

    //let materias = getMaterial().materials

    let materias = [
        {
            quantidade : 10,
            tipo_material : "MADEIRA"
        },
        {
            quantidade : 20,
            tipo_material : "PLASTICO"
        },
        {
            quantidade : 30,
            tipo_material : "METAL"
        }
    ]
    var data = []

    materias.forEach(material => {
            data.push([material.tipo_material, material.quantidade]) 
    })
    

    
    // var data = [
    //     ['material', 'quantidade'],
    //     ['material', 'quantidade'],
    //     ['material', 'quantidade'],
    //     ['material', 'quantidade'],
    //     ['material', 'quantidade'],
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
    containerTres.appendChild(table);
}

