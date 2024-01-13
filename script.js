const previousOperationText = document.querySelector("#previous-operation");
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
        this.currentOperation = digit;
        this.updateScreen();
    }

    //Outros valores da tela
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === ".") {
            calc.adDigit(value);
        } else {
            console.log("Op: " + value);
        }
    });
});