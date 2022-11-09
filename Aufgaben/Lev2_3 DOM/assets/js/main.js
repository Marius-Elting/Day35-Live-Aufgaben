

let color = ["#f6c89f", "#ffe7d1", "#4b8e8d", "#396362", "#666", "#333", "#111"];
let button = document.querySelector(".active");
let nav = document.getElementsByClassName("nav");
button.addEventListener("click", () => {
    // console.log(home);
    // if (txt == "Home" && color == "#111") {
    //     txt = "emoH";
    // } else {
    //     color = "#111";
    //     txt = "Home";
    // }
    // console.log("penis");

    for (let i = 0; i < nav.length; i++) {
        let selNav = nav[i];
        console.log(nav[i]);
        selNav.style.backgroundColor = color[i];
        selNav.style.color = color[5];
        console.log(nav[i]);

    }

});