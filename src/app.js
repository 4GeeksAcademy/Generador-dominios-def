import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Dar formato al código

window.onload = function () {

  let pronoun = ["my", "the", "our", "your", "super"];
  let adjetive = ["fast", "crazy", "silent", "bright", "wild"];
  let noun = ["tiger", "planet", "coder", "pirate", "dream"];
  let extension = [".com", ".es", ".org", ".net", ".eu"]

  // Cambio de nombre de variables
  for (let pro = 0; p < pronoun.length; p++) {
    for (let adj = 0; a < adjetive.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let ext = 0; e < extension.length; e++) {
          console.log(pronoun[pro] + adjetive[adj] + noun[n] + extension[ext])
        }
      }
    }
  }
};
