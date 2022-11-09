


let button = document.querySelector(".active");
let home = document.getElementById("navHome");
let color = "#111";
let txt = "Home";
button.addEventListener("click", () => {
    console.log(home);
    if (txt == "Home" && color == "#111") {
        txt = "emoH";
        color = "pink";
    } else {
        color = "#111";
        txt = "Home";
    }
    home.style.backgroundColor = color;
    home.innerHTML = txt;
});