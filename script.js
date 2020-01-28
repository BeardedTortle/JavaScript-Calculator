const digitButtons = document.querySelectorAll('.digits');
const decimalButton = document.querySelector('#decimal');
const displayInput = document.querySelector('#currentInput');
const ACBUTTON = document.querySelector('#AC');
const operandButtons = document.querySelectorAll('.operandButton');
const history = document.querySelector('#history');
const BACKBUTTON = document.querySelector('#CE');
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

BACKBUTTON.addEventListener('click', clearEntry);
function clearEntry() {
    displayInput.innerHTML = '';
    decimalButton.disabled = '';
}

operandButtons.forEach(item => {
    item.addEventListener('click', e => {
        
        if(item.innerHTML === '='){
        values.push(parseInt(displayInput.innerHTML));
        operate();
        displayInput.innerHTML = `${result}`;
        history.innerHTML = '';
        values = [];
        operation = '';
        }else {
            if(values.length < 2){
        operation = item.innerHTML;
        values.push(parseInt(displayInput.innerHTML));
        history.innerHTML += ` ${displayInput.innerHTML} ${item.innerHTML}`
        displayInput.innerHTML = '';
       
        console.log(values)
        console.log(values.length);} else {
            operate();
            console.log(values)
            history.innerHTML = `${result} ${item.innerHTML}`;
            displayInput.innerHTML = '';
        }}

        
    });
});

function operate(){
switch (operation){
    case '+':
        result = addFunction();
        values = [result, ]
        break;
    case '-':
        result = subFunction();
        values = [result, ]
        break;
    case '*':
        result = multFunction();
        values = [result, ]
        break;
    case '/':
        result = divFunction();
        values = [result, ]
}}

function addFunction(){ 
    return values.reduce((a,b)=> a+b)
}
function subFunction(){ 
    return values.reduce((a,b)=> a-b)
}
function multFunction(){ 
    return values.reduce((a,b)=> a*b)
}
function divFunction(){ 
    return values.reduce((a,b)=> a/b)
}


console.log(values)