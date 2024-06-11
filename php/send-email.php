<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = strip_tags(trim($_POST["fname"]));
    $lname = strip_tags(trim($_POST["lname"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($fname) || empty($lname) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Lütfen formu tekrar doldurun.";
        exit;
    }

    $recipient = "batuhanpolat.edu@gmail.com";  
    $subject = "Web Sitenizden Yeni İletişim!: $fname $lname";

    $email_content = "Ad: $fname $lname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mesaj:\n$message\n";

    $email_headers = "From: $fname $lname <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Teşekkürler! Mesajınız gönderildi.";
    } else {
        http_response_code(500);
        echo "Üzgünüz, mesajınızı gönderemedik.";
    }
} else {
    http_response_code(403);
    echo "Bu sayfaya bu şekilde erişemezsiniz.";
}
?>
