/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return `${this.firstname} ${this.lastname}`;
        }
        set name(newname) {
            [this.firstname, this.lastname] = newname.split(" ")
        }

    }
    let fn = new person("Maxou", "Hsc");
    console.log(fn.name);
    fn.name = "Morganette Bilou"
    console.log(fn.name);

    // your code here
})();