import { Personne } from './Personne.mjs';
import { htmlPersonnes } from './htmlpersonnes.mjs';

export function test1() {
  const personnes = [
    new Personne({id: 'TEST001', poids: 70.3, taille: 1.74}),
    new Personne({id: 'TEST002', poids: 62.4, taille: 1.62})
  ];

  const pageHTML = htmlPersonnes(personnes);
  console.log(pageHTML);
}

test1();