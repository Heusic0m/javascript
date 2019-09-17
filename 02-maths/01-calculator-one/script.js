/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    var op1;
    var op2;
    var number;
    document.getElementById("addition").addEventListener("click", () => {
        op1 = Number(document.getElementById("op-one").value);
        op2 = Number(document.getElementById("op-two").value);
        let sum = op1 + op2;
        alert(sum);


        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {

        op1 = document.getElementById("op-one").value;
        op2 = document.getElementById("op-two").value;
        number = op1 - op2;
        alert(number);

        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        op1 = document.getElementById("op-one").value;
        op2 = document.getElementById("op-two").value;
        number = op1 * op2;
        alert(number);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        op1 = document.getElementById("op-one").value;
        op2 = document.getElementById("op-two").value;
        number = op1 / op2;
        alert(number);
        // perform an division
    });
})();