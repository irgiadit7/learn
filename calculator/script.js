const appendValue = (value)=> {
    document.getElementById('display').value += value;
}

const clearDisplay = ()=> {
    document.getElementById('display').value = ('');
}

const calculate = () => {
    document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = "Error!";
    }
}