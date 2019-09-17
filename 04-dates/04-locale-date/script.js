/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var date = new Date();
    var currentday = date.getDay();
    console.log(currentday);

    switch (currentday) {
        case 1:
            document.getElementById("target").innerHTML = date.toLocaleString() + " lundi";
            break;
    }
    switch (currentday) {
        case 2:
            document.getElementById("target").innerHTML = date.toLocaleString() + " mardi";
            break;
    }
    switch (currentday) {
        case 3:
            document.getElementById("target").innerHTML = date.toLocaleString() + " mercredi";
            break;
    }
    switch (currentday) {
        case 4:
            document.getElementById("target").innerHTML = date.toLocaleString() + " jeudi";
            break;
    }
    switch (currentday) {
        case 5:
            document.getElementById("target").innerHTML = date.toLocaleString() + " vendredi";
            break;
    }
    switch (currentday) {
        case 6:
            document.getElementById("target").innerHTML = date.toLocaleString() + " samedi";
            break;
    }
    switch (currentday) {
        case 0:
            document.getElementById("target").innerHTML = date.toLocaleString() + " dimanche";
            break;
    }










    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();