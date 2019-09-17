/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const birds = [
    {
      name: "mouette",
      fem: true,
    },
    {
      name: "corbeau",
    },
    {
      name: "mésange",
      fem: true,
    },
    {
      name: "hibou",
    },
    {
      name: "buse",
      fem: true,
    },
    {
      name: "pigeon",
    },
    {
      name: "pie",
      fem: true,
    },
    {
      name: "vautour",
    },
    {
      name: "faucon",
    },
    {
      name: "rouge-gorge",
    },
    {
      name: "tourterelle",
      fem: true,
    },
    {
      name: "corneille",
      fem: true,
    },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);
  document.getElementById("run").addEventListener("click", () => {
    let bis = Math.floor(Math.random() * Math.floor(11));
    let adj1 = Math.floor(Math.random() * Math.floor(10));
    adj = Array.from(adjectives); //Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    document.getElementById("target").innerHTML =
      birds[bis].name + " " + adj[adj1];

    if (birds[bis].fem) {
      document.getElementById("target").innerHTML =
        birds[bis].name + " " + adj[adj1].concat("e");
    } else {
      document.getElementById("target").innerHTML =
        birds[bis].name + " " + adj[adj1];
    }
  });
})();
