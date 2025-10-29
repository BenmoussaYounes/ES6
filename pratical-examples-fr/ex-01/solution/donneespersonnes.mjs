

export function poids(personnes){
return Array.from(personnes, (p)=>p.poids);
}

export function tailles(personnes){
return Array.from(personnes, (p)=>p.taille);
}

export function donness(personnes){
    return {
        poids: poids(personnes),
        tailles: tailles(personnes)
    }
}