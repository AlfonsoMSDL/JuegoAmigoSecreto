// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creando un array para almacenar los nombres
let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if(nombreAmigo == ""){
        alert("Debe introducir un nombre");
    }else{
        //Añadiendo el amigo a la lista
        listaAmigos.push(nombreAmigo);

        //Reinicio la lista de amigos que se esta mostrando
        document.getElementById("listaAmigos").innerHTML = "";

        //Mostrando todos los amigos
        mostrarAmigos();

        limpiarInput();
    }
}

function sortearAmigo() {
    let cantidadAmigos = listaAmigos.length;
    let numeroAleatorio = Math.floor(Math.random()*cantidadAmigos);

    let amigoElegido = listaAmigos[numeroAleatorio];

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: "+amigoElegido;

}

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function mostrarAmigos(){
    for(let i = 0; i < listaAmigos.length; i++){
        //Voy acumulando los amigos en la lista
        document.getElementById("listaAmigos").innerHTML += "<li>"+listaAmigos[i]+"</li>";
    }
}