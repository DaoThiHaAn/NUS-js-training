document.querySelector(".calculator").style.width = document.querySelector(".button-line").offsetWidth + "px"
let mathArr = [];

let screen = document.querySelector(".screen");
function clearScreen() {
    screen.textContent = '';
    mathArr = []
}

document.querySelectorAll(".digit").forEach(btn => {
    btn.addEventListener("click", function() {
        const digit = this.dataset.digit;
        mathArr.push(digit);
        screen.textContent += digit;
    });
});

document.querySelector(".eq-op").addEventListener("click", function() {
    screen.textContent = eval(mathArr.join(""))
})
