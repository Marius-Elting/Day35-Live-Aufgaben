let button = document.getElementById("submit");

button.addEventListener("click", () => {
    let firstName = document.getElementById("vorname").value;
    let lastName = document.getElementById("nachname").value;
    let land = document.getElementById("land").value;
    console.log(`Full Name ${firstName} ${lastName}, Land: ${land}`);
});