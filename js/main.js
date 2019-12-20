(function() {

    //Variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    //Funciones
    var agregarTarea = function() {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }

        //Agregamos el contenido del enlace
        enlace.appendChild(contenido);

        //Establecemos un atributo href
        enlace.setAttribute("href", "#");
        //Agregamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        //Limpiar el input
        tareaInput.value = "";

    };
    var comprobarInput = function() {

    };
    var eliminarTarea = function() {

    };


    //Eventos

    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);


    //Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    //Borrando elementos de la lista
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }

}());