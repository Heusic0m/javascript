/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    var date




    document.getElementById("run").addEventListener("click", () => {
        year = document.getElementById("year").value;
        for (let month = 1; month < 13; month++) {
            date = new Date(year, month, 13);

            if (date.getDay() == 5) {
                console.log("Il y a un vddi 13 le " + month + " mois de l'année " + year)
            }

        }


    }) // your code here
})();