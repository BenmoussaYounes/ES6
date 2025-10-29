import { Personne } from "./personne.mjs";
import {affichagePersonne } from "./affichagepersonne.mjs"

function test1(){
  // let p = new Personne("TEST001", 70.3, 1.74); Q1
  let p = Personne.depuisDonnes("TEST001", 70.3, 1.74);
  console.log(affichagePersonne(p));
}

test1();

function test2(){
 //  let p = new Personne("TEST002", 62.4, 1.62); Q1
 let p = Personne.depuisDonnes("TEST002", 62.4, 1.62);
  console.log(affichagePersonne(p));
}

test2();

function test3(){
     console.log(affichagePersonne(Personne.depuisDonnes("TEST003", 55.3, 1.54 )));
}

test3();

function test4(){
    let obj = {id : "TEST004", poids : 56.3, taille: 1.5 }
    console.log(affichagePersonne(Personne.depuisJSON(JSON.stringify(obj))));
}

test4();

function test5(){
      let p = Personne.depuisDonnes("TEST005", 55.3, 1.54);
      let json = JSON.stringify(p);
      console.log(affichagePersonne(Personne.depuisJSON(json)));
}

test5();