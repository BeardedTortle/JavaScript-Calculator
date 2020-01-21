function nothingButNumbers () {
document.querySelector('input').addEventListener('keypress', function (e) {
    const allowedChars = '0123456789.';
    function contains(stringValue, charValue) {
        return stringValue.indexOf(charValue) > -1;
    }
    const invalidKey = e.key.length === 1 && !contains(allowedChars, e.key) 
    || e.key === '.' && contains(e.target.value, '.');
    invalidKey && e.preventDefault();
});}

let values = [];
let result = 0;

function sumFunction() {
    values.push(parseFloat(document.querySelector('input').value));
    result = values.reduce((a,b)=> a+b , 0);
    document.querySelector('input').value = result;
    
}

document.querySelectorAll('digits').addEventListener('click', function(e){
    document.querySelector('input').value = 1;
})
