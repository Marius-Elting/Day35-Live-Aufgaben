let example = document.querySelectorAll(".example");
color = "#666";

function myFunction() {
    if (color == "#666") {
        color = "black";
    } else {
        color = "#666";
    }
    for (let exam of example) {
        exam.style.backgroundColor = color;
    }
}