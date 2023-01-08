let currentResult = 0;

outputResult(currentResult, '');

function add() {
    currentResult = currentResult + parseFloat(userInput.value);
    const description = `${currentResult} + ${userInput.value}`
    outputResult(currentResult, description);
}

addBtn.addEventListener('click', add)