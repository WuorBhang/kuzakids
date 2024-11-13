<?php

class PHP_Email_Form
{
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $message;
    public $ajax = false;

    private $errors = [];

    public function add_message($message, $name, $min_len = 0)
    {
        if (strlen($message) < $min_len) {
            $this->errors[] = "The $name must be at least $min_len characters long.";
        }
        $this->$name = $message;
    }

    private function send_email()
    {
        $headers = "From: " . $this->from_name . " <" . $this->from_email . ">\r\n";
        $headers .= "Reply-To: " . $this->from_email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        $body = "Name: " . $this->from_name . "\n";
        $body .= "Email: " . $this->from_email . "\n";
        $body .= "Subject: " . $this->subject . "\n\n";
        $body .= "Message:\n" . $this->message . "\n";

        if (mail($this->to, $this->subject, $body, $headers)) {
            return true;
        } else {
            return false;
        }
    }

    public function send()
    {
        if (count($this->errors) > 0) {
            return implode("<br>", $this->errors);
        }

        if ($this->send_email()) {
            return "Message sent successfully.";
        } else {
            return "There was an error sending your message. Please try again later.";
        }
    }
}

?>
