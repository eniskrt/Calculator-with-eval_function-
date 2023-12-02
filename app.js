const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const equal = document.querySelector('.btn-equal');

buttons.forEach((item) => {
    item.addEventListener("click",(e) => {
        calc(e.target.textContent);
    })
})

let calc = (item) => {
    if (item === "C") {
        display.textContent = "";
        return;
    } else if (item === "="){
        display.textContent = eval(display.textContent);
    } else if (item ==="x³"){
        display.textContent = Math.pow(display.textContent,3);
    } else if (item ==="x²"){
        display.textContent = Math.pow(display.textContent,2);
    } else if (item === "√x") {
        display.textContent = Math.sqrt(display.textContent);
    } else if (item === "%"){
        display.textContent = eval(display.textContent)/100;
    }else{
        display.textContent += item;
    }
}
