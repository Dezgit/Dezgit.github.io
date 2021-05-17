<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$to = 'deadtalkers@gmail.com';

	$name = $_REQUEST['name'];
	$contact = $_REQUEST['phone'];
    $email = $_REQUEST['email'];    
	$cmessage = $_REQUEST['message'];
	


	
	$headers = "From: $email";
	$headers = "From: " . $email . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "You have a message from your Contact Form";

// $logo = 'assets/img/logo/mailheader.png';
$link = 'www.senthilhospital.live';


$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Contact Mail From Senthil Hospital</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	// $body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
	$body .= "<td style='border:none;'><strong>Contact:</strong> {$contact}</td>";
	$body .= "</tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Email:</strong></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$email}</td></tr>";
	// $body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
	$body .= "<tr><td></td></tr>";	
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Message:</strong></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";	
	$body .= "</tbody></table>";
	$body .= "</body></html>";


	$send = mail($to, $subject, $body, $headers);
}else {
	# Not a POST request, set a 403 (forbidden) response code.
	http_response_code(403);
	echo '<p class="alert alert-warning">There was a problem with your submission, please try again.</p>';
}




