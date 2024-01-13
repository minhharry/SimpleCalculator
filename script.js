
const display = document.getElementById('display');

function button_on_click(input) {
    display.value += input
}
function clear_display() {
    display.value = '';
}
function calculate() {
    try
    {
        display.value = String(eval(display.value))
    }
    catch(error)
    {
        display.value = 'Error';
    }
}