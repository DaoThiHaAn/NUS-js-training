document.querySelector(".calculator").style.width = document.querySelector(".button-line").offsetWidth + "px"
let mathArr = [];
let screen = document.querySelector(".screen");
var isEvaluated = false;

function clearScreen() {
    screen.textContent = '';
    mathArr = []
    isEvaluated = false;
}

function backSpace() {
    mathArr.splice(mathArr.length-1, 1);
    screen.textContent = mathArr.join("").replaceAll("*", "x");
    isEvaluated = false;
}

function pushDigit(digit) {
    mathArr.push(digit);
    if (digit == '*')
        screen.textContent += 'x';
    else
        screen.textContent += digit;
}

document.querySelectorAll(".digit").forEach(btn => {
    btn.addEventListener("click", function() {
        const digit = this.dataset.digit;

        // handle cases of continous operators
        if (btn.classList.contains("op")) {
            if (["+", "-", "*", "/", "."].includes(mathArr[mathArr.length - 1])) 
                return;

            // case of multiple dots like 1.2.3.4
            if (digit == '.') {
                const tokens = mathArr.join("").split(/[\+\-\*\/]/);
                const lastNum = tokens[tokens.length-1];
                if (lastNum.includes('.'))
                    return
            }
            isEvaluated = false;
        }
        else 
            // not select numbers after finish evaluating
            if (isEvaluated) return;

        pushDigit(digit)
    });
});

function calc() {
    const res = eval(mathArr.join(""));
    screen.textContent = res;
    mathArr.length = 0;
    mathArr.push(res.toString());
    isEvaluated = true;
}
