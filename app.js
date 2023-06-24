function enviarSaludo(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var saludo = document.querySelector("#saludo");
    var texto = "hola " + nombre.value + " "+ apellido.value +", gracias por rellenar el formulario";
    
    saludo.innerHTML= texto;
}