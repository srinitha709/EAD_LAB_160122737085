let result = document.getElementById("result");

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function deleteLast()   
 {
    result.value = result.value.slice(0, -1);
}

function calculate(operator)   
 {
    let expression = result.value;
    try {
        result.value = eval(expression);
    } catch (error) {
        result.value = "Error";
    }
}