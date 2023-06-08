import { getTabela } from "../../EndPoints/getTable.js";

export const criarTabelaControle = () =>{
    var container = document.getElementById("container");
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');

    var headers = ['Responsável por doar', 'Data material doado', 'Tipo material doado', 'Quantidade material doado', 'Onde material foi doado'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headRow.appendChild(th);
    });


        //let tabelas = getTabela().tables

        let tabelas = [
            {
                nome : "Cleber",
                quantidade_material : 20,
                data_chegada : "2023-10-20",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber2",
                quantidade_material : 10,
                data_chegada : "2023-10-22",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber3",
                quantidade_material : 5,
                data_chegada : "2023-10-24",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber",
                quantidade_material : 20,
                data_chegada : "2023-10-20",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber2",
                quantidade_material : 10,
                data_chegada : "2023-10-22",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber3",
                quantidade_material : 5,
                data_chegada : "2023-10-24",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber",
                quantidade_material : 20,
                data_chegada : "2023-10-20",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber2",
                quantidade_material : 10,
                data_chegada : "2023-10-22",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber3",
                quantidade_material : 5,
                data_chegada : "2023-10-24",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber",
                quantidade_material : 20,
                data_chegada : "2023-10-20",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber2",
                quantidade_material : 10,
                data_chegada : "2023-10-22",
                local: "qualquercoisas",
                material: "Madeira"
            },
            {
                nome : "Cleber3",
                quantidade_material : 5,
                data_chegada : "2023-10-24",
                local: "qualquercoisas",
                material: "Madeira"
            }

        ]
        var data = []
    
        tabelas.forEach(chegada => {
                data.push([chegada.nome, chegada.data_chegada,chegada.material,chegada.quantidade_material,chegada.local]) 
        })
        

    // var data = [
    //     ['nome', 'data', 'info', 'info', 'local'],
    //     ['nome', 'data', 'info', 'info', 'local'],
    //     ['nome', 'data', 'info', 'info', 'local'],
    //     ['nome', 'data', 'info', 'info', 'local'],
    //     ['nome', 'data', 'info', 'info', 'local'],
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
    container.appendChild(table);
}
