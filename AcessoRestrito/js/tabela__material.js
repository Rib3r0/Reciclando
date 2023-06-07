
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
    
    var data = [
        ['material', 'quantidade'],
        ['material', 'quantidade'],
        ['material', 'quantidade'],
        ['material', 'quantidade'],
        ['material', 'quantidade'],
    ];
    
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

