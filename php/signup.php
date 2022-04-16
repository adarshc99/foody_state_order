<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);
$User_name =$decode["Uname"];
$Email_name =$decode["Uemail"];
$Password_name =$decode["Upassword"];
$Password_con_name =$decode["U_con_assword"];

session_start();
$_SESSION['Uname'] = $User_name;
$_SESSION['Uemail'] = $Email_name;




echo json_encode(array("status"=>true,"value"=>1));


?>