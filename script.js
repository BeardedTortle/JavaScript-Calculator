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



document.querySelectorAll('.operandButton').forEach(item => {
    item.addEventListener('click', e => {
        let operand = item.innerHTML;
        let value = document.getElementById('currentInput').innerHTML;
        

        document.getElementById('history').innerHTML += `${value} ${operand} `;
        document.getElementById('currentInput').innerHTML = '';
        console.log(operand)
    });
});
