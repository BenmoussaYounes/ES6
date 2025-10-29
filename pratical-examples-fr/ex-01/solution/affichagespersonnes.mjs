
export function afficherTableauPersonnes(personnes){

    // for ( let p of personnes){
    //     console.log("["+p.id+", " + p.poids+", " + p.taille+ "]");
    // }
    personnes.forEach((p)=>console.log("["+p.id+", " + p.poids+", " + p.taille+ "]"));
}
export function afficherPersonnes(...personnes){
    for ( let p of personnes){
        console.log("["+p.id+", " + p.poids+", " + p.taille+ "]");
    }
};