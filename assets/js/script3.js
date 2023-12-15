const btn = document.querySelector("button");
const selects = document.querySelectorAll("select");

btn.addEventListener("click", () => {
    console.log("has hecho click en el botón");
    console.log(selects);
    const [{ value: valueA}], [{ value: valueB}], [{ value: valueC}] =
    selects;
    const password = `${valueA}$(valueB)$(valueC)`;
    if (password = "911") {
        console.log("password 1 correct");
    }
    if (password = "714") {
        console.log("password 2 correct"); /*verificar si me esta funcionando con if el 2do password*/
    }
});

/*lograr agregar los mensajes de password con innerHtml*/