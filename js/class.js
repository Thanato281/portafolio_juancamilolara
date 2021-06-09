// Obtenemos la referencia del elemento body
let body = document.getElementsByTagName("body")[0];
// Creamos un elemento <table> y un elemento <tbody>
let tabla = document.createElement("table");
let tblBody = document.createElement("tbody");
// Creamos las celdas
for (let i = 0; i < 10; i++) {
  // Creamos las hileras de la tabla
  let fila = document.createElement("tr");
  for (let j = 0; j < 15; j++) {
    // Crea un elemento <td> y un nodo de texto, hace que el nodo de
    // texto sea el contenido de <td>, ubica el elemento <td> al final
    // de la hilera de la tabla
    let celda = document.createElement("td");
    let textoCelda = document.createTextNode(i + " - " + j);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
  }
// agregamos la hilera al final de la tabla (al final del elemento tblbody)
tblBody.appendChild(fila);
}
// posicionamos el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tabla);
// modifica el atributo "border" de la tabla y lo fija a "2";
tabla.setAttribute("border", 2);
tabla.setAttribute("id", "tabla");
let result = document.getElementById("resultado");
result.appendChild(tabla);

console.log(tabla);