function appendValue(value) {
    console.log("Button clicked:", value);

    document.getElementById("display").value += value;

    console.log("Current display:",
        document.getElementById("display").value);
}

function clearDisplay() {
    console.log("Display cleared");

    document.getElementById("display").value = "";
}

function calculate() {

    let expression = document.getElementById("display").value;

    console.log("Expression entered:", expression);

    try {
        let result = eval(expression);

        console.log("Result:", result);

        document.getElementById("display").value = result;

    } catch {
        console.log("Invalid Expression");

        alert("Invalid Expression");
    }
}