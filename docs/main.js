console.log('main.js');
(() => {
    console.log('Here we are!');
    window.addEventListener("load", (event) => {
        const num1 = document.getElementById('num1');
        const num2 = document.getElementById('num2');
        const operator = document.getElementById('operator'); // dropdown or input for operation
        const result = document.getElementById('result');

        const update = () => {
            const a = parseFloat(num1.value);
            const b = parseFloat(num2.value);
            let res = "";

            if (!isNaN(a) && !isNaN(b)) {
                switch (operator.value) {
                    case "add":
                        res = a + b;
                        break;
                    case "subtract":
                        res = a - b;
                        break;
                    case "multiply":
                        res = a * b;
                        break;
                    case "divide":
                        res = b !== 0 ? (a / b) : "Error: /0";
                        break;
                    default:
                        res = "";
                }
            }
            result.innerHTML = res;
        };

        num1.addEventListener("input", update);
        num2.addEventListener("input", update);
        operator.addEventListener("change", update);
    });      
})();
