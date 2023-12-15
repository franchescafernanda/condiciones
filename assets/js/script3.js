
function apretar() {
    const sel1 = document.querySelector("#select1").value
    const sel2 = document.querySelector("#select2").value
    const sel3 = document.querySelector("#select3").value
    /* console.log(sel1, sel2, sel3) */
    const boton = document.querySelector("#btn")
    const msj = document.querySelector("#mensaje")

    const pack = sel1 + sel2 + sel3 
    /* console.log(pack) */

    if(pack == 911) {
        msj.innerHTML = "password  1  correcto"
    } else if (pack == 714){
        msj.innerHTML = "password  2  correcto"
    } else {
        msj.innerHTML = "password incorrecto"
    }
}