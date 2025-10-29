import { Personne } from "./personne.mjs"
import {afficherTableauPersonnes, afficherPersonnes } from "./affichagespersonnes.mjs"

function test1(){
let tableau = [
Personne.depuisDonnes("1",45,1.52),
Personne.depuisDonnes("2",65,1.85)
]
afficherTableauPersonnes(tableau);

};

test1();

function test2(){
  let p1 = Personne.depuisDonnes("P1", 70, 1.75);
  let p2 = Personne.depuisDonnes("P2", 60, 1.65);
  afficherPersonnes(p1, p2);
};

test2();
