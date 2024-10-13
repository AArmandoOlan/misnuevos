agregarTarea() {

    //obtenemos 4l valor de una tarea
    let nuevaTareaTexto = document.getElementById("nuevatarea").value; 

    //validamos que el valor no sea vacio
    if (nuevatareatexto === "") {
    alert("por favor, ingrese una tarea ");
    return;

    }

    //crear elemento en la lista
let nuevaTarea = document.createElement("li");
nuevaTarea.textContent = nuevaTareaTexto + " ";

//crea boton Eliminar
let botonEliminar = document.createelement("Button");
botonEliminar.textContent = "Eliminar"
botonEliminar.onclick = function() {nuevaTarea.remove();}

//agregar boton de eliminar al elemento de la lista
nuevaTarea.appendChild(botonEliminar);

//agregar el elemento / la tarea a la lista
document.getElementById("listaTareas").appendChild(nuevaTarea); 

//Limpiar el cuadro de texro del nombre de la tarea
document.getElementById("NuevaTarea"). value = ""

    }