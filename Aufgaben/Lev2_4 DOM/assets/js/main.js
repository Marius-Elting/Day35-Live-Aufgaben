let body = document.querySelector("body");
let button = document.querySelector("#button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    let select = document.getElementById("farbeAuswahlen").value;
    let selectTrimn = select.replace(" ", "");
    console.log(selectTrimn);
    body.style.backgroundColor = selectTrimn;
});