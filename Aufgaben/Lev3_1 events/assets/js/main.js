let body = document.getElementById("body");
let output = document.getElementById("demo");

let redva = 255;
let greenva = 255;
let blueva = 255;
body.style.backgroundColor = "rgb(" + redva + "," + greenva + "," + blueva + ")";
output.innerHTML = "RGB Code " + "rgb(" + redva + "," + greenva + "," + blueva + ")" + "Hex-Code: " + rgbToHex(redva, greenva, blueva);
// onchange = "fontSizeChange(value)";

let slider = document.querySelectorAll("input");
let i = 0;
let counter = 0;

for (let slide of slider) {

    slide.addEventListener("change", (e) => {

        if (e.target.id == "rot") {
            counter++;
            redva = Number(e.target.value);
        } else if (e.target.id == "grun") {
            counter++;
            greenva = Number(e.target.value);
        } else if (e.target.id == "blau") {
            counter++;
            blueva = Number(e.target.value);

        }
        body.style.backgroundColor = "rgb(" + redva + "," + greenva + "," + blueva + ")";
        output.innerHTML = "RGB Code " + "rgb(" + redva + "," + greenva + "," + blueva + ")" + "Hex-Code: " + rgbToHex(redva, greenva, blueva);
    });

}
function changeBackground(color) {
    body.style.backgroundColor = color;
    counter++;
    output.innerHTML = "Wir haben den Hintergrund " + counter + " mal geändert";
}

function valueToHex(c) {
    var hex = c.toString(16);
    return hex;
}
function rgbToHex(r, g, b) {

    return (valueToHex(r) + valueToHex(g) + valueToHex(b));

}



