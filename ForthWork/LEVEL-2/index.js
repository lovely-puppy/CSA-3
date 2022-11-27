const buttonContainer = document.querySelector('.buttons');
const prevElement = document.querySelector('.prev');
const currentElement = document.querySelector('.current');
let currentNumber = '';
let prevNumber = '';
let sign = '';

buttonContainer.addEventListener('click', e => {
    const type = e.target.dataset.type;
    const text = e.target.textContent;
    if (type === 'equal') {
        calculate();
    } else if (type === 'operate') {
        operate(text);
    } else if (type === 'del') {
        deleteFn();
    } else if (type === 'clear') {
        clear();
    } else {
        pushNumber(text);
    }
    updateScreen();
});

function pushNumber(num) {
    if (num.toString().length > 1) return;
    currentNumber += num;
    // console.log(currentNumber)
}

function clear() {
    currentNumber = '';
    prevNumber = '';
    sign = '';
}

function deleteFn() {
    if (!currentNumber.toString().length) return;
    currentNumber = currentNumber.toString().slice(0, -1);
}

function operate(text) {
    if (!currentNumber.toString().length) return;
    sign = text;
    prevNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let res = 0;
    const current = Number(currentNumber);
    const prev = Number(prevNumber);
    switch(sign) {
        case '+':
            res = current + prev;
            break;
        case '-':
            res = prev - current;
            break;
        case '×':
            res = prev * current;
            break;
        case '÷':
            res = prev / current;
            break;
        default:
            return;
    }
    currentNumber = res.toFixed(0);
    prevNumber = '';
    sign = '';
}

function updateScreen() {
    currentElement.textContent = currentNumber;
    if (sign) {
        prevElement.textContent = `${prevNumber} ${sign}`;
    } else {
        prevElement.textContent = '';
    }
}