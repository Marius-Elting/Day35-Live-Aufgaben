let output = document.getElementById("option-selected");
let button = document.getElementById("my-select");

button.addEventListener("change", (e) => {
    // value = button.value;
    e.target.value;
    output.innerHTML = `Sie haben ausgewälht: ${e.target.value}`;
});;