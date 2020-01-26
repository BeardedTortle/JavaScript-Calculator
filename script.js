document.querySelectorAll('.digits').forEach(item => {
    item.addEventListener('click', e => {
        if(item.innerHTML === '.'){
            console.log('you pressed decimal')
            document.getElementById('currentInput').innerHTML += item.innerHTML;
            document.getElementById('decimal').innerHTML = '';
        }
        document.getElementById('currentInput').innerHTML += item.innerHTML;
    });
});

function sumFunction() {
     
}

function subFunction() {

}

function multFunction() {

}

function divFunction() {

}

function equalsFunction() {

}