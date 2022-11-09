let element = document.querySelector("h1");

function small() {
    element.classList.add("small");
    element.classList.remove("med");
    element.classList.remove("big");
}
function medium() {
    element.classList.add("med");
    element.classList.remove("small");
    element.classList.remove("big");
}
function big() {
    element.classList.add("big");
    element.classList.remove("small");
    element.classList.remove("med");
}
