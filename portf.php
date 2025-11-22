<?php
// On vérifie si la méthode POST a été utilisée pour soumettre le formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 2. Récupération des données du formulaire et sécurisation
    // Note : Les noms ('nom', 'email', 'message', etc.) DOIVENT correspondre
    // aux attributs 'name' de vos inputs HTML.
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email']));
    $telephone = htmlspecialchars(trim($_POST['telephone'] ?? ''));
    $objet = htmlspecialchars(trim($_POST['objet']));
    $message = htmlspecialchars(trim($_POST['message']));

    // 3. Préparation de l'e-mail

    $destinataire = "touresouwoye7@gmail.com"; 
    // -----------------------------------------------------------

    $sujet = "Nouveau message de contact portfolio : " . $objet;
    
    // Construction du corps du message que vous allez recevoir
    $contenu_email = "Vous avez reçu un nouveau message de votre portfolio.\n\n";
    $contenu_email .= "Nom et prénom : " . $nom . " " . $prenom . "\n";
    $contenu_email .= "E-mail : " . $email . "\n";
    if (!empty($telephone)) {
        $contenu_email .= "Téléphone : " . $telephone . "\n";
    }
    $contenu_email .= "Objet du message : " . $objet . "\n\n";
    $contenu_email .= "--- MESSAGE ---\n" . $message . "\n-----------------\n";

    // Entêtes de l'e-mail (pour que la réponse se fasse à l'expéditeur)
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 4. Envoi de l'e-mail
    if (mail($destinataire, $sujet, $contenu_email, $headers)) {
        // 5. Redirection vers une page de succès (si l'envoi a réussi)
        header("Location: merci.html");
        exit;
    } else {
        // En cas d'échec de l'envoi (problème de serveur)
        // Vous pouvez laisser un simple message d'erreur à la place de la redirection
        echo "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.";
    }

} else {
    // Si quelqu'un tente d'accéder à la page PHP directement
    header("Location: index.html");
    exit;
}
?>