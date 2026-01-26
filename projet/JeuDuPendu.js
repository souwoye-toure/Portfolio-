function shiFuMi(choixJoueur) {
    let possibilite = ['pierre', 'feuille', 'ciseaux'];
    let resultatPossible = ['égalité', 'victoire', 'défaite'];

    let choixAdversaire = adversaire();
    let resultat = analyse(possibilite.indexOf(choixJoueur), choixAdversaire);

    document.getElementById("resultat").innerHTML = `
        <p>Tu as choisi : <strong>${choixJoueur}</strong></p>
        <p>L'adversaire a choisi : <strong>${possibilite[choixAdversaire]}</strong></p>
        <p>Résultat : <strong>${resultatPossible[resultat]}</strong></p>
    `;
}

function adversaire() {
    return Math.floor(Math.random() * 3); 
}

function analyse(choixJoueur, adversaire) {
    if (choixJoueur === adversaire) return 0;

    if (
        (choixJoueur === 0 && adversaire === 2) ||
        (choixJoueur === 1 && adversaire === 0) ||
        (choixJoueur === 2 && adversaire === 1)
    ) {
        return 1;
    }

    return 2;
}
