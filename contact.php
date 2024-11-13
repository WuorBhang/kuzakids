<?php

$receiving_email_address = 'uhuribhang21@gmail.com';

if (file_exists($php_email_form = '../js/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
} else {
    die('Unable to load the "PHP Email Form" Library!');
}

$contact = new PHP_Email_Form;
$contact->ajax = true;

if (isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
    $contact->from_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $contact->from_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $contact->subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $contact->message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    if (!filter_var($contact->from_email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address. Please check and try again.';
        exit;
    }

    $contact->to = $receiving_email_address;

    $contact->add_message($contact->from_name, 'From');
    $contact->add_message($contact->from_email, 'Email');
    $contact->add_message($contact->message, 'Message', 10);

    echo $contact->send();
} else {
    echo 'Please complete all fields.';
}

?>
