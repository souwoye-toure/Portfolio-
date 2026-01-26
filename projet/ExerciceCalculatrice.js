function soustraction(x, y) {
    return x - y;
}

function addition(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return 'Erreur : division par zéro';
    }
    return x / y;
}

function afficherResultat(operation) {
    let nb1 = parseFloat(document.getElementById("nb1").value);
    let nb2 = parseFloat(document.getElementById("nb2").value);
    let resultat;

    if (isNaN(nb1) || isNaN(nb2)) {
        document.getElementById("resultat").innerHTML = "Veuillez entrer deux nombres valides.";
        return;
    }

    switch (operation) {
        case 'addition':
            resultat = addition(nb1, nb2);
            break;
        case 'soustraction':
            resultat = soustraction(nb1, nb2);
            break;
        case 'multiplication':
            resultat = multiply(nb1, nb2);
            break;
        case 'division':
            resultat = divide(nb1, nb2);
            break;
    }

    document.getElementById("resultat").innerHTML = `
        Résultat : <strong>${resultat}</strong>
    `;
}
