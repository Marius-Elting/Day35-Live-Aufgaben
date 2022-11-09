
// console.log(x);

let body = document.querySelector("body");
let codeOutput = document.getElementById("code");
let keyOutput = document.getElementById("key");
let keyCodeOutput = document.getElementsByClassName("keycode");

body.addEventListener("keypress", (e) => {
    var x = e.code;
    var keyCode = e.keyCode;
    console.log(x);
    console.log(keyCode);
    codeOutput.innerHTML = x;
    for (let keys of keyCodeOutput) {
        keys.innerHTML = keyCode;
    }
    let key = x.slice(x.length - 1, x.length);
    keyOutput.innerHTML = key;
});