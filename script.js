class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.operate()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    operate(){
        console.log('computing')
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+': 
                computation = prev + current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            case '-':
                computation = prev - current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
      }
    updateDisplay() {
        this.currentOperandTextElement.innerText =
          this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
          this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
          this.previousOperandTextElement.innerText = ''
        }
      }
    }

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allClear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.operate()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})


//Keyboard support
document.addEventListener('keypress', key =>{
    let code = key.keyCode
    console.log(key.keyCode)
    switch (code){
        case 49:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 50:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 51:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 52:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break    
        case 53:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 54:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 55:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 56:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 57:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 48:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 46:
            calculator.appendNumber(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break
        case 47:
            calculator.chooseOperation(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break     
        case 42:
            calculator.chooseOperation(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break     
        case 45:
            calculator.chooseOperation(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break         
        case 43:
            calculator.chooseOperation(String.fromCharCode(key.keyCode))
            calculator.updateDisplay()
            break        
        case 13 || 43:
            calculator.operate()
            calculator.updateDisplay()
            break
        default: 
            return
        
    }
})

document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
            calculator.delete()
            calculator.updateDisplay()
      break; 
      case 46:
            calculator.clear()
            calculator.updateDisplay()
      break;
      default:
      return;
   }
}