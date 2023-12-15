const img = document.querySelector("img");

let state = false;

img.addEventListener("click", () => {
    console.log("Has hecho click en la imagen");
    if (state == false) {
        img.style.border = "2px dashed red";
        state = true;
    } else {
        img.style.border = "none";
        state = false;
    }
});