let presupuestoTotal = 0
let precioPano = 4000
let autos = 0
let iniciar
let marca
let cantidadPanos = 0

entrarAlSistema();

function entrarAlSistema(){
   iniciar = confirm("¿iniciar presupuesto?");
    iniciarTramite(iniciar)
}

function iniciarTramite(n){
    if(n){
        marca = prompt("Ingrese marca del vehiculo");
        validarMarca(marca)
    }else {
        alert("No ha iniciado un presupuesto, gracias por su consulta");
    }
}

function validarMarca(m){
    if(m){
        autos = Number(prompt("Ingrese cuantos autos hay que reparar"))
        dibujarTabla()
        for (let i = 0; i < autos; i++) {
            unidadesAReparar()
        }
        calcularPresupuesto()
    }else {
        alert("Ha cancelado el presupuesto actual");
    }
}

function dibujarTabla () {
    console.log("techo (3 paños)")
    console.log("capot (3 paños)")
    console.log("tapa baul (2 paños)")
    console.log("puerta conductor (1 paño)")
    console.log("puerta conductor trasera (1 paño)")
    console.log("puerta acompañante (1 paño)")
    console.log("puerta acompañante trasera (1 paño)")
    console.log("guardabarro delantero conductor (1 paño)")
    console.log("guardabarro trasero conductor (1 paño)")
    console.log("guardabarro delantero acompañante (1 paño)")
    console.log("guardabarro trasero acompañante (1 paño)")
}

function unidadesAReparar() {
    cantidadPanos += Number(prompt("Sume la cantidad de paños afectados del auto según la siguiente tabla"))

}

function calcularPresupuesto() {
    presupuestoTotal = autos * cantidadPanos * precioPano
    console.log("El costo de su presupuesto para autos marca " + marca + " es de: $" + presupuestoTotal)
}