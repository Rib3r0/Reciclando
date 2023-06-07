
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
    
    var data = [
        ['nome', 'E-mail', 'info'],
        ['nome', 'E-mail', 'info'],
        ['nome', 'E-mail', 'info'],
        ['nome', 'E-mail', 'info'],
        ['nome', 'E-mail', 'info'],
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
    containerDois.appendChild(table);
}
