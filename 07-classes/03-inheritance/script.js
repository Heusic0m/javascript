/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name) {
            this.name = name
        }
        sayhello() {

            console.log(`${this.constructor.greeting} je m'appelle ${this.name}`);
        }

    }
    class chien extends Animal {
        constructor(name) {
            super(name)
        }
        static greeting = "wifnondidjuuu"
    }
    class chat extends Animal {
        constructor(name) {
            super(name)
        }
        static greeting = "miaoutèè"

    }
    let Snoop = new chien("Jeannot");
    let Greffier = new chat("philibert");
    console.log(Snoop.sayhello(), Greffier.sayhello())


})();