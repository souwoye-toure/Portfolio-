<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Inclut PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupération et sécurisation des données
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email']));
    $telephone = htmlspecialchars(trim($_POST['telephone'] ?? ''));
    $objet = htmlspecialchars(trim($_POST['objet']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Préparation du contenu
    $contenu_email = "Nom et prénom : $nom $prenom\n";
    $contenu_email .= "E-mail : $email\n";
    if (!empty($telephone)) $contenu_email .= "Téléphone : $telephone\n";
    $contenu_email .= "Objet : $objet\n\n";
    $contenu_email .= "Message :\n$message\n";

    // Configuration PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Paramètres SMTP Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'souwoyetoure7@gmail.com';       // Ton Gmail
        $mail->Password   = 'ton_mdp_app';              // Mot de passe d'application Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Destinataires et contenu
        $mail->setFrom($email, "$nom $prenom");
        $mail->addAddress('touresouwoye7@gmail.com'); // Ton email
        $mail->Subject = $objet;
        $mail->Body    = $contenu_email;

        $mail->send();
        header("Location: merci.html"); // Page de succès
        exit;

    } catch (Exception $e) {
        echo "Erreur lors de l'envoi du message : {$mail->ErrorInfo}";
    }

} else {
    header("Location: index.html"); // Redirection si accès direct
    exit;
}
?>
