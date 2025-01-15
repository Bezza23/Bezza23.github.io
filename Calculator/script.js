function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const expr = display.value;

    try {
        const result = evaluateExpression(expr);
        display.value = result !== undefined ? result : 'Error';
    } catch {
        display.value = 'Error';
    }
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
                const b = values.pop();
                const a = values.pop();
                const op = operators.pop();
                values.push(applyOperation(op, a, b));
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        const b = values.pop();
        const a = values.pop();
        const op = operators.pop();
        values.push(applyOperation(op, a, b));
    }

    return values[0]; // Return the final result
}

function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

function applyOperation(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}