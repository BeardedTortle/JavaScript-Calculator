let display = document.querySelector('#display');
display.innerHTML = '0';

let subDisplay = document.querySelector('#cdisplay');
subDisplay.innerHTML = '0';

const NUMS = document.getElementsByClassName('digits');
const OPS = document.getElementsByClassName('operandButton');

let value = '';
let operator = '';
let valuesArr = [];

function enterValue() {
    value = this.innerHTML;
    console.log(value);
    if( value === '.'){
        document.querySelector('#dot').disabled = true;
    }
    if (display.innerHTML == '0'){
        display.innerHTML = '';
    }
    display.innerHTML += value;
}

function operate(){
    console.log('= test');
}

function selectOPS() {
    operator = this.innerHTML;
    console.log(operator);    
}

function numberListener(){
for(let i = 0; i < NUMS.length; i++){
    NUMS[i].addEventListener('click', enterValue);
}
};
function operandListener(){
    for (let x = 0; x < OPS.length; x++){
        OPS[x].addEventListener('click', selectOPS);
    }
}
numberListener();
operandListener();

function clearEntry(){
    display.innerHTML = '0';
    value = '';
}

document.getElementById("clearInput").addEventListener('click', clearEntry);

