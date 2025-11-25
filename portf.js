/* ------------------------- */
/* Menu actif au clic        */
/* ------------------------- */
const menuLinks = document.querySelectorAll('.main-nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Retirer la classe 'active' de tous les liens
        menuLinks.forEach(l => l.classList.remove('active'));
        // Ajouter 'active' au lien cliqué
        this.classList.add('active');
    });
});
