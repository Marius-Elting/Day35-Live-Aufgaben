// querySelector
//Gibt immer nur ein Element aus (das erste was gefunden wurde)
const articleElement = document.querySelector("#my-article");

console.log(articleElement);

// ändert die Hintergrund farbe des Articles
articleElement.style.backgroundColor = "violet";

//Hier kriegen wir alle Elemnte zurück auf die der Selecotr passt.
//erstellt eine NodeList
const infoTexts = document.querySelectorAll(".infotext");

// Zusatz: let infoTextArray = Array.from(infoText) um aus der Nodelist einen Array zu erstellen
console.log(infoTexts);
console.log(infoTexts[0]); // gibt das Element in der Console aus
console.log(infoTexts[1]); // gibt das Element in der Console aus
console.log(infoTexts[0].innerHTML); // gibt das innerHTML in der Console aus
console.log(infoTexts[1].innerHTML); // gibt das innerHTML in der Console aus

infoTexts.forEach((as) => {
    console.log(as.innerHTML);
});

// for of für iterierbare objekte 
for (let text of infoTexts) {
    console.log(text.innerHTML);
}

let index = 0;
while (index < infoTexts.length) {
    const aText = infoTexts[index];
    console.log(aText.innerHTML);
    index++;
}

// get elements by classnames 
// Wichtig! Hier kann man nicht mit forEach arbeiten
// Lösung: loops oder in einen Array umwandeln
let classes = document.getElementsByClassName("infotext");

console.log(classes);
// umwandeln in einen Array
let classesArray = Array.from(classes);
console.log(classesArray);

// jetzt kann ich mit forEach arbeiten

classesArray.forEach((textElement) => {
    textElement.style.backgroundColor = "green";
    textElement.innerHTML = "Hello World!";
});


const lastInfoText = document.querySelectorAll(".infotext:last-child");

lastInfoText.forEach((lasttext) =>
    lasttext.style.backgroundColor = "tomato"
);


// Eventlistener addEventlistener 


//der einfachste Fall den wir kennen

const anotherArticle = document.querySelector("#another-article");
console.log(anotherArticle);

// addEventListener (eventTyp, callbackFuncion)
anotherArticle.addEventListener("click", callA);

function callA() {
    console.log("Hello World!");
    anotherArticle.style.backgroundColor = "tomato";
}
const circle = document.getElementById("abc");

const body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(mouseX);
    console.log("Y" + mouseY);
    circle.style.left = `${mouseX - 10}px`;
    circle.style.top = `${mouseY - 10}px`;
    return mouseX, mouseY;

});

