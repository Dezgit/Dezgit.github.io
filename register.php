<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = 'reachtfci@gmail.com';
    
 //Register Datas   
$name = $email =$business = $message = $states = $pincode = $categories[]= $activity = $turnover = $validity = '';
//Delivery Datas
$daddress = $daddress1 = $dstates= $dcity = $dpin = $dname = $dcontact = $demail = '';

$get_cat[] = '';

if(isset($_POST['categories'])) 
{
    $get_data = $_POST['categories'];
   
  
    $count = count($get_data);
    
    // echo("<p>You selected $count Categories: ");

    for($i=0; $i < $count; $i++)
    {
        $get_cat[$i] = $get_data[$i]. " ";
        // $get_cat[$i] .= ", ";
        
        // echo($get_cat[$i]);
    }
    // echo("</p>");
    
    
  
}
    $get_cat1= implode(",", $get_cat);

    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    
    // $contact = $_REQUEST['contact'];
    $message = $_REQUEST['message'];
    $states = $_REQUEST['states'];
    $pincode = $_REQUEST['pincode'];
   
    $turnover = $_REQUEST['turnover'];
 
    
    $daddress = $_REQUEST['daddress'];
    $daddress1 = $_REQUEST['daddress1'];
    $dstates = $_REQUEST['dstates'];
    $dcity = $_REQUEST['dcity'];
    $dpin = $_REQUEST['dpin'];
    $dname = $_REQUEST['dname'];
    $dcontact = $_REQUEST['dcontact'];
    $demail = $_REQUEST['demail'];

    if(isset($_REQUEST['activity'])){
        // $business = $_REQUEST['business'];
        $value1 = $_REQUEST['business'];

        switch($value1){
            case "1": $business = "Private Limited Company"; break;
            case "2": $business = "Public Limited Company"; break;
            case "3": $business = "Partnership"; break;
            case "4": $business = "Propreitership"; break;
            case "5": $business = "Others"; break;
                  
            default: $business = "No Selected Options"; break;          
    }
}

    
    if(isset($_REQUEST['activity'])){
        $value = $_REQUEST['activity'];

        switch($value){
            case "1": $activity = "Processing and Manufacturing Unit"; break;
            case "2": $activity = "Marketers"; break;
            case "3": $activity = "Wholesale"; break;
            case "4": $activity = "Retail"; break;
            case "5": $activity = "Storage"; break;
            case "6": $activity = "Warehouse"; break;
            case "7": $activity = "Hotel"; break;
            case "8": $activity = "Import"; break;
            case "9": $activity = "Export"; break;
            case "10": $activity = "Proprietary Food"; break;
            case "11": $activity = "Nutraceuticals"; break;
            case "12": $activity = "Others"; break;   

            default: $activity = "No Selected Options"; break;          
    }
}

    if(isset($_REQUEST['activity'])){
        //    $validity = $_REQUEST['validity'];
        $value2 = $_REQUEST['validity'];

        switch($value2){
            case "1": $validity = "1 Year"; break;
            case "2": $validity = "2 Years"; break;
            case "3": $validity = "3 Years"; break;
            case "4": $validity = "4 Years"; break;
            case "5": $validity = "5 Years"; break;
                  
            default: $validity = "No Selected Options"; break;          
    }
}

    // echo("<br>");
    // echo($name);
    // echo("<br>");
    // echo($email);
    // echo("<br>");
    // echo($business);
    // echo("<br>");
    // echo($message);
    // echo("<br>");
    // echo($states);
    // echo("<br>");
    // echo($pincode);
    // echo("<br>");
    // echo($activity);
    // echo("<br>");
    // echo($turnover);
    // echo("<br>");
    // echo($validity);
    // echo("<br>");
    // echo($daddress);
    // echo("<br>");
    // echo($daddress1);
    // echo("<br>");
    // echo($dstates);
	// echo("<br>");
    // echo($dcity);
    // echo("<br>");
    // echo($dpin);
    // echo("<br>");
    // echo($dname);
    // echo("<br>");
    // echo($dcontact);
    // echo("<br>");
    // echo($demail);
    // echo("<br>");
    // echo($get_cat1);
	
	$headers = "From: $email";
	$headers = "From: " . $email . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "You have a message from Registration FCI.";

    // $logo = 'assets/img/logo/mailheader.png';
    $link = 'www.tfcoi.com';


$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>MAIL FROM REGISTRATION FCI</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	// $body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
    $body .= "</td></tr></thead><tbody><tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><h1><strong>Registration Details:</strong></h1></td></tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
	// $body .= "<td style='border:none;'><strong>Contact:</strong> {$contact}</td>";
	// $body .= "</tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Email:</strong></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$email}</td></tr>";
	// $body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
    $body .= "<tr><td></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Business:</strong></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$business}</td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Message:</strong></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$message}</td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>State:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$states}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Pincode:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$pincode}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Categories:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$get_cat1}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Acitivty:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$activity}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Expected Turn Over:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$turnover}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Validity:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$validity}</td></tr>";
    
    $body .= "<tr><td colspan='2' style='border:none;'><h1><strong>Delivery Details:</strong></h1></td></tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$dname}</td>";
	$body .= "<td style='border:none;'><strong>Contact:</strong> {$dcontact}</td>";
	$body .= "</tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Flat / Room No:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$daddress}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Road / Street Name:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$daddress1}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>State:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$dstates}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'><strong>Pin-code:</strong></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$dpin}</td></tr>";
    
    
	$body .= "</tbody></table>";
	$body .= "</body></html>";


	$send = mail($to, $subject, $body, $headers);
}else {
	# Not a POST request, set a 403 (forbidden) response code.
	http_response_code(403);
	echo '<p class="alert alert-warning">There was a problem with your submission, please try again.</p>';
}


    

