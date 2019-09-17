/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let a = [];
        const add = (accumulator, currentValue) => accumulator + currentValue;
        for (let i = 0; i < 10; i++) {
            let z = Math.floor(Math.random() * Math.floor(100));
            let y = (document.getElementsByTagName("td")[i].innerHTML = z);
            a.push(z);
        }
        for (let i = 0; i < 10; i++) {
            let x = (document.getElementById("min").innerHTML = Math.min(...a));
        }
        for (let i = 0; i < 10; i++) {
            let x = (document.getElementById("max").innerHTML = Math.max(...a));
        }
        for (let i = 0; i < 10; i++) {
            let x = (document.getElementById("sum").innerHTML = (a.reduce(add)))
        }
        for (let i = 0; i < 10; i++) {
            let x = (document.getElementById("average").innerHTML = (a.reduce(add) / 10))
        }
    });
})();