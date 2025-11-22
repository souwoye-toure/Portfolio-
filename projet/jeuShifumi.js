
function shiFuMi()
{
    let possibilite = ['pierre', 'feuille', 'ciseaux']
    let resultatPossible = ['égalité', 'victoire', 'défaite']
    let choixAdversaire = adversaire()

    let choixJoueur = prompt("Pierre, Feuille ou Ciseaux ?")
    let verifJoueur = verificationChoixJoueur(choixJoueur, possibilite)

    console.log("Choix de l'adversaire : " + possibilite[choixAdversaire], " Choix du joueur : " + possibilite[verifJoueur]+ " Resultat : ",
        resultatPossible[analyse(verifJoueur, choixAdversaire)]
    )
}


function adversaire()
{
    let resultatAdvesaire = Math.floor(Math.random()*2)

    return resultatAdvesaire
}

function verificationChoixJoueur(choixJoueur, possibilite)
{
    let resultat = -1
    for(let i = 0; i < possibilite.length; i++) {
        if (choixJoueur === possibilite[i]) {
            resultat = i
            break
        }
    }

    return resultat
}


function analyse(choixJoueur, adversaire)
{
    let resultat = 0

    if (choixJoueur === adversaire) {
        resultat = 0
    } else if (
        (0 === choixJoueur && 2 === adversaire) ||
        (1 === choixJoueur && 0 === adversaire) ||
        (2 === choixJoueur && 1 === adversaire)
    ) {
        resultat = 1
    } else {
        resultat = 2
    }

    return resultat
}




