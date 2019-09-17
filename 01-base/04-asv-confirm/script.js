/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var question1;
    var question2;
    var question3;


    do {
        question1 = prompt("age?");
        question2 = prompt("sexe?");
        question3 = prompt("ville?");

    }
    while (!confirm("confirmer?"));
    alert("ok");

})();