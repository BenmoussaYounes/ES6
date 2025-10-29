import {poids, tailles, donness} from "./donneespersonnes.mjs"
import {Personne} from "./personne.mjs"


function test1(){
let tableau = [
Personne.depuisDonnes("1",45,1.52),
Personne.depuisDonnes("2",65,1.85)
];

let poidsTableau = poids(tableau);
console.log(poidsTableau);

let taillesTableau = tailles(tableau);
console.log(taillesTableau);

console.log(donness(tableau))
}

test1();