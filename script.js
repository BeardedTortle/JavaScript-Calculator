let display = document.querySelector('#display');
display.innerHTML = '0';

let subDisplay = document.querySelector('#cdisplay');
subDisplay.innerHTML = '0';

const NUMS = document.getElementsByClassName('digits');
const OPS = document.getElementsByClassName('operandButton');

let value = ''

function enterValue() {
    value = this.innerHTML;
    if( value === '.'){
        document.querySelector('#dot').disabled = true;
    }
    if (display.innerHTML == '0'){
        display.innerHTML = '';
    }
    display.innerHTML += value;
}

function numberListener(){
for(let i = 0; i < NUMS.length; i++){
    NUMS[i].addEventListener('click', enterValue);
}
};
numberListener();
