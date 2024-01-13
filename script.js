const previousOperationText = document.querySelector("#previous-operations");
const currentOperationText = document.querySelector("#current-operation");
const buttons= document.querySelectorAll("#buttons-container");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    //Adiciona os valores no visor da calculadora
    adDigit(digit) {
        //verifique se operação já possiu ponto ' . '
        if(digit == "." && this.currentOperationText.innerText.includes(".")) {
            return
        }
        this.currentOperation = digit;
        this.updateScreen();
    }

    //Todos Processos de Operações
    processOperation(operation) {
        //Anotar Valores passados
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch(operation) {
            case "+":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "-":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
                case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }

    //Outros valores da tela
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null,
    ) {
        console.log(operationValue, operation, current, previous);
        
        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            //Checar se o valor é zero
            if(previous === 0) {
                operationValue = current
            }

            //Adicionar o valor para previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
        }
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === ".") {
            calc.adDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});