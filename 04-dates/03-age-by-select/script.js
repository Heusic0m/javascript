/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var date = new Date();
    var currentday = date.getDate();
    var currentmonth = date.getMonth();
    var currentyear = date.getFullYear();




    document.getElementById("run").addEventListener("click", () => {
        bdday = document.getElementById("dob-day").value;
        bdmonth = document.getElementById("dob-month").value;
        bdyear = document.getElementById("dob-year").value;
        var age = currentyear - bdyear;
        if (currentmonth < bdmonth) {
            age--;
        }
        if (currentday < bdday) {
            bdmonth--;
        }
        console.log(bdmonth);
        console.log(age);


    })
})();