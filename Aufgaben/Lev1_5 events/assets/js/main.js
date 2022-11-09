let button = document.getElementById("clickMe");
let klick = 0;
button.addEventListener("click", () => {
    klick++;
    let counter = button.innerHTML.replace(klick - 1, klick);
    button.innerHTML = counter;
});