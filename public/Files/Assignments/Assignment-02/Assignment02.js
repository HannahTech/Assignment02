
document.getElementById("btnS").addEventListener("click", function() {
  var tb = createTable(document.getElementById("row").value, document.getElementById("column").value);

  document.getElementById("table-div").appendChild(tb);

});


function createTable(r, c) {

  var tb = document.createElement('table');

  for (var i = 1; i <= r ; i++) {
    var row = document.createElement('tr');

    for (var j = 1; j <= c; j++) {
      var column = document.createElement('td');
      column.appendChild(document.createTextNode(" row:" + i + " column:" + j));
      row.appendChild(column);
    }

    
    if ( i % 2 === 0 ) {
      row.setAttribute("bgColor", "#dadada");
    }else{
      row.setAttribute("bgColor", "#8ac387");
    }

    tb.appendChild(row);
    tb.setAttribute("border", "2");
  }

  return tb;
}





// Reset button

function myFunction() {
  document.getElementById("page").reset();
}


// 10 and 15 Cells Tables

function generate_table(n) {
  var body = document.getElementsByTagName("body")[0];

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");


  for (var i = 1; i < n+1 ; i++) {
    var row = document.createElement("tr");
    for (var j = 1; j < n+1 ; j++) {

      var cell = document.createElement("td");
      var cellText = document.createTextNode("R "+i+", C "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    if ( i % 2 === 0 ) {
      row.setAttribute("bgColor", "#e2ffae");
    }else{
      row.setAttribute("bgColor", "white");
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("cellSpacing", "7px");
  tbl.setAttribute("cellPadding", "3px");
}




