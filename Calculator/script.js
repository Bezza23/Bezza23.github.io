function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display').value;
    const result = evaluateExpression(display);
    display.value = result !== undefined ? result : 'Error';
}

function evaluateExpression(expr) {
    const tokens = expr.split(/([\+\-\*\/])/).map(token => token.trim()).filter(token => token);
    const values = [];
    const operators = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            values.push(parseFloat(token));
        } else if (['+', '-', '*', '/'].includes(token)) {
            while (operators.length && precedence(operators[operators.length - 1]) >= precedence(token)) {
                values.push(applyOperation(operators.pop(), values.pop(), values.pop()));
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        values.push(applyOperation(operators.pop(), values.pop(), values.pop()));
    }

    return values.length ? values[0] : undefined;
}

function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

function applyOperation(op, b, a) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}