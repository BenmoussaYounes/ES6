export class Personne {
  id;
  poids;
  taille;
  IMC;

//   constructor(id, poids, taille) { // Constructor Q1
//     this.id = id;
//     this.poids = poids;
//     this.taille = taille;
//     this.IMC = this.poids * (this.taille * this.taille);
//   }

  constructor(obj) {
    this.id = obj.id;
    this.poids = obj.poids;
    this.taille = obj.taille;
    this.IMC = this.poids * (this.taille * this.taille);
  }

  static depuisDonnes(id, poids, taille){
    let obj = {id, poids, taille};
    return new Personne(obj);
  }

  static depuisJSON(json){
    let obj = JSON.parse(json);
    return new Personne(obj);
  }

}
