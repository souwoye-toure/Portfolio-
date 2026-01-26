
function afficher(texte) {
  const zone = document.getElementById("message");
  const p = document.createElement("p");
  p.textContent = texte;
  zone.appendChild(p);
}

function resetMessages() {
  document.getElementById("message").innerHTML = "";
}


function genererNombreMystere() {
  return Math.floor(Math.random() * 10) + 1;
}


const gages = [
  "Aboie comme un chien 🐶",
  "Fais une danse 💃🏼",
  "Chante le générique de Pat'Patrouille 🎤",
  "Marche sans chaussures 👟",
  "Fais des sauts comme un lapin 🐇"
];

function tirerGage(perdant) {
  const indice = Math.floor(Math.random() * gages.length);
  afficher("❌ " + perdant + " reçoit un gage : " + gages[indice]);
}


let scoreJoueur = 0;
let scoreBot = 0;

function majScore() {
  document.getElementById("scoreJoueur").textContent = "Joueur : " + scoreJoueur;
  document.getElementById("scoreBot").textContent = "Bot : " + scoreBot;
}


function joueurDevine() {
  resetMessages();

  const joueur = Number(document.getElementById("number").value);
  const mystere = genererNombreMystere();

  if (isNaN(joueur) || joueur < 1 || joueur > 10) {
    afficher("❗ Entre un nombre valide entre 1 et 10.");
    return;
  }

  if (joueur === mystere) {
    scoreJoueur++;              // ✅ SEUL le joueur gagne
    majScore();
    afficher("🎉 Bravo ! Tu as gagné (+1 point)");
    botJoue();
  } else {
    afficher("❌ Raté ! Le nombre était " + mystere);
    tirerGage("Le joueur");
  }
}

function botJoue() {
  resetMessages();
  
  const nombreMystereBot = genererNombreMystere();
  const propositionBot = genererNombreMystere();

  if (propositionBot === nombreMystereBot) {
    scoreBot++;                 // ✅ SEUL le bot gagne
    majScore();
    afficher("🤖 Le bot a gagné (+1 point)");
  } else {
    afficher("❌ Le bot a raté ! Le nombre était " + nombreMystereBot);
    tirerGage("Le bot");
  }
}


function resetJeu() {
  resetMessages();
  scoreJoueur = 0;
  scoreBot = 0;
  majScore();

  document.getElementById("number").value = "";
  afficher("🔄 Nouvelle partie ! Devine un nombre entre 1 et 10.");
}


document.getElementById("btnValider").addEventListener("click", joueurDevine);
document.getElementById("btnBot").addEventListener("click", botJoue);
document.getElementById("btnRejouer").addEventListener("click", resetJeu);


majScore();
afficher("Bienvenue ! Devine un nombre entre 1 et 10.");
