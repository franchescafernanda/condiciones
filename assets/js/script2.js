const inputA = document.querySelector("#input1");
const inputB = document.querySelector("#input2");
const inputC = document.querySelector("#input3");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const valueA = inputA.value;
    const valueB = inputB.value;
    const valueC = inputC.value;

    const total = Number(valueA) + Number(valueB) + Number(valueC);
    if (total ≤ 10) {
        console.log(`"llevas ${total} stickers"`);
    } else {
        console.log(`"llevas muchos stickers"`);
    }
});

/*lograr poner los textos con innerHtml*/
