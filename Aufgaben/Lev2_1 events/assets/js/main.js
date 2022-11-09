let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let li = document.querySelectorAll("li");

for (let lis of li) {
    lis.addEventListener("click", (e) => {
        console.log(e.target.id);
        if (e.target.id == "grauTaste") {
            bgcolor = "gray";
            color = "white";
        } else if (e.target.id == "weissTaste") {
            bgcolor = "white";
            color = "black";
        } else if (e.target.id == "blauTaste") {
            bgcolor = "blue";
            color = "white";
        } else if (e.target.id == "gelbTaste") {
            bgcolor = "yellow";
            color = "black";
        }

        p.style.color = color;
        h1.style.color = color;
        body.style.backgroundColor = bgcolor;

    });
}