function jeuDuPendu() {
    let motSecret = prompt("Saisissez votre  mot secret en minuscule (sans espaces, accents , majuscules) :")
    let lettresProposees = [];
    let erreurs = 0;
    const maxErreurs = 6;
    let motAffiche = Array(motSecret.length).fill('_');
    while (erreurs < maxErreurs && motAffiche.join('') !== motSecret) {
        console.log(motAffiche.join(' '));
        console.log(`Lettres déjà proposées : ${lettresProposees.join(', ')}`);
        console.log(`Erreurs : ${erreurs}/${maxErreurs}`);
        let lettre = prompt("Proposez une lettre :");
        if (lettre.length !== 1 || !/^[a-z]$/.test(lettre)) {
            console.log("Veuillez saisir une seule lettre.");
            continue;
        }
        if (lettresProposees.includes(lettre)) {
            console.log("Vous avez déjà proposé cette lettre.");
            continue;
        }
        lettresProposees.push(lettre);
        if (motSecret.includes(lettre)) {
            for (let i = 0; i < motSecret.length; i++) {
                if (motSecret[i] === lettre) {
                    motAffiche[i] = lettre;
                }
            }
        } else {
            erreurs++;
            console.log(`Mauvaise lettre !`);
        }
    }
    console.log(`Le mot secret était : ${motSecret}`);
    if (motAffiche.join('') === motSecret) {
        console.log("Vous avez gagné !");
    } else {
        console.log("Vous avez perdu !");
    }
    let rejouer = confirm("Voulez-vous rejouer ?");
    if (rejouer) {
        jeuDuPendu();
    } else {
        console.log("A la  prochaine !");
    }
}
jeuDuPendu();