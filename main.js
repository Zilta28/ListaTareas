//Variable: es un dato que vamos a tener que definir, para que la computadora le haga un espacio a la computadora 

let nombre;
console.log(nombre);
nombre = "Lizbeth";

//Constante espacio en la memoria pero en este caso no va a variar, es decir, nunca va a cambiar. //

alert("Hola mundo desde alert");
//Tipo de datos
//String
let texto = "soy un texto";
//Número
let numero = 42;
//Boolean 2 datos, ejemplo verdadero o falso 
let verdadero = true;
//Indefined
let undefined; 
//null
let vacio = null;


function agregarTarea(tarea,id,hecho,eliminar){
    if (eliminar){
        return
    }

}

ByteLengthQueuingStrategy.addEventListener("click", function (event)){
 const element = event.target;
 const elementData = element.attributes.data.value;
 if (elementData == "hecho"){
    tareaRealizada(element);
 } else if (elementData =="eliminar")
 {
    tareaEliminada(element);
 };
 localStorage.setItem("TODO", JSON.stringify(LIST));
});

let data = localStorage.getItem ("TODO")
if (data){
    LIST = JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
} else if {
    LIST = [];
    id = 0; 
}

function cargarLista(array){
    array.forEach(
        function (item){
            agregarTarea(item.nombre, item.id, item.hecho, item.eliminar);
        }
    );
}




