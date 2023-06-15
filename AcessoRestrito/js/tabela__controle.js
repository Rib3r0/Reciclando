import { getTabela } from "../../EndPoints/getTable.js";

export const criarTabelaControle = async () =>{
    var container = document.getElementById("container");
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');

    var table = document.createElement('table');
table.classList.add('responsive-table');


    var headers = ['Responsável por doar', 'Data material doado', 'Tipo material doado', 'Quantidade material doado', 'Onde material foi doado'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headRow.appendChild(th);
    });


        let tabelas = await getTabela()
        console.log(getTabela());

        var data = []
    
        tabelas.tables.forEach(chegada => {
                data.push([chegada.qual_doador, chegada.data_chegada.split('T')[0],chegada.tipo_material,chegada.quantidade,chegada.ponto_de_coleta]) 
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
    table.classList.add('responsive-table');
}
