function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = 'Error';
    }
}