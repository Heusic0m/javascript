/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        // console.log(getRandomInt(3));
        x = getRandomInt(4);



        switch (x) {
            case 0:
                document.body.style.backgroundColor = 'red';

                break;
            case 1:
                document.body.style.backgroundColor = 'blue';
                break;
            case 2:
                document.body.style.backgroundColor = 'green';

                break;
            case 3:
                document.body.style.backgroundColor = 'yellow';
                break;
        }
    })

})();