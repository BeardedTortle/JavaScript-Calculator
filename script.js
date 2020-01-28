const digitButtons = document.querySelectorAll('.digits');
const decimalButton = document.querySelector('#decimal');
const displayInput = document.querySelector('#currentInput');
const ACBUTTON = document.querySelector('#AC');
const operandButtons = document.querySelectorAll('.operandButton');
const history = document.querySelector('#history');
let operation = '';
let values = [];
let result = 0; 

//clear all entries
ACBUTTON.addEventListener('click', allClear);
function allClear() {
    displayInput.innerHTML = '';
    decimalButton.disabled = '';
    history.innerHTML = '';
    values = [];
}

digitButtons.forEach(item => {
    item.addEventListener('click', e => {
        if(item === decimalButton){
           
            decimalButton.disabled = 'true';
        }
        displayInput.innerHTML += item.innerHTML;
    })
});


function clearEntry() {
    displayInput.innerHTML = '';
    decimalButton.disabled = '';
}

operandButtons.forEach(item => {
    item.addEventListener('click', e => {
        
        operation = item.innerHTML;
        values.push(displayInput.innerHTML);
        history.innerHTML += ` ${displayInput.innerHTML} ${item.innerHTML}`
       displayInput.innerHTML = '';
       console.log(`${item.innerHTML} clicked`)
       
    });
});



