// let boton = document.getElementById("btn"); 
2 // let titulo = document.getElementsByClassName("title"); 
3 
 
4 let boton = document.querySelector("#btn"); 
5 let titulo = document.querySelector(".title"); 
6 let titulos = document.querySelectorAll(".title"); 
7 let mainTitle = document.querySelectorAll("#box-title .title"); 
8 
 
9 console.log(boton); 
10 console.log(titulo); 
11 console.log(titulos); 
12 console.log(mainTitle); 
13 
 
14 //RECORRER UN ARRAY DE VARIOS ELEMENTOS HTML 
15 for (let i = 0; i < titulos.length; i++) { 
16   console.log(titulos[i].innerText); 
17 } 
18 
 
19 //CREAR ELEMENTOS HTML CON JS 
20 
 
21 let buttonsContainer = document.getElementById("buttons"); 
22 
 
23 boton.addEventListener("click", function() { 
24   let secondContainer = document.createElement("div"); 
25   secondContainer.setAttribute("id", "second-container"); 
26   buttonsContainer.appendChild(secondContainer); 
27 
 
28   let text = "Me agregaron desde Js"; 
29 
 
30   let containerTitle = document.createElement("h3"); 
31   containerTitle.innerText = text; 
32   secondContainer.appendChild(containerTitle); 
33 }); 



// TIPOS DE FUNCIONES

// DECLARATIVA
// función Add (a, b) {
// sea suma = a + b;
// console.log (suma);
//}

// Agregar (3, 3);

// Expresiones de funciones

// const Add = function (a, b) {
// devuelve a + b;
//};

// console.log (Agregar (3, 3));

// Funciones de autoinvocación

// (función () {
// console.log (4 + 4);
//}) ();

// Las funciones se pueden utilizar como valores
// función Add (a, b) {
// devuelve a + b;
//}

// let suma = Add (4, 3);
// console.log (suma);

// Funciones de flecha

// const Add = (a, b) => {
// devuelve a + b;
//};

// Con return implícito
// constante Suma = (a, b) => a + b;

// Con sólo un parámetro

// constante Suma = a => a + 3;

// console.log (Agregar (5));