const inputA = Number( document.querySelector("#input1").value)
const inputB = Number( document.querySelector("#input2").value)
const inputC = Number( document.querySelector("#input3").value)
const btn = document.querySelector("#btn");

/*console.log(inputA, inputB, inputC);*/

function verificar(){
    const inputA = Number( document.querySelector("#input1").value)
    const inputB = Number( document.querySelector("#input2").value)
    const inputC = Number( document.querySelector("#input3").value)
    const btn = document.querySelector("#btn");

    /*console.log(inputA, inputB, inputC)*/

    total= Number(inputA) + Number(inputB) + Number(inputC)
    /*console.log(total)*/

    const comprar= document.querySelector("#result")
    /*console.log(comprar)*/

    if (total <= 10) {
        comprar.innerHTML = "llevas " + total + " stickers"
    } else {
        comprar.innerHTML = "llevas demasiados stickers"
    }
}





/*btn.addEventListener("click", () => {


    const total = Number(inputA) + Number(inputB) + Number(inputC);
    console.log(total)
    if (total <= 10) {
        console.log(`"llevas ${total} stickers"`);
    } else {
        console.log(`"llevas muchos stickers"`);
    }
});*/

/*lograr poner los textos con innerHtml*/
