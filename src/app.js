import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
   let pronoun = ["my", "the", "our", "your", "super"];
  let adj = ["fast", "crazy", "silent", "bright", "wild"];
  let noun = ["tiger", "planet", "coder", "pirate", "dream"];
  let extension = [".com", ".es", ".org", ".net", ".eu"]

for ( let p = 0; p < pronoun.length; p++){
  for (let a = 0; a < adj.length; a++){
    for (let n = 0; n < noun.length; n++){
      for (let e = 0; e < extension.length; e++){
console.log(pronoun[p] + adj[a] + noun[n] + extension[e])
      }

    }
  }
}

  console.log("Hello Rigo from the console!");
};
