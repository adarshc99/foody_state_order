<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);
include "signup_config.php";
$User_Vcode = mysqli_real_escape_string($con,md5($decode["User_password"]));
$User_Vemail =mysqli_real_escape_string($con,$decode["User_email"]);



$sql = "SELECT * FROM signup WHERE Email = '{$User_Vemail}' and Password = '{$User_Vcode}'";

$result = mysqli_query($con,$sql);

if(mysqli_num_rows($result)>0)
{
    $row = mysqli_fetch_assoc($result);
    session_start();
    $_SESSION["User_Name_insert"] = $row["Name"];
    $_SESSION["User_Email_insert"] = $row["Email"];
    echo json_encode(array("status"=>true));
}
else
{
    echo json_encode(array("status"=>false,"value"=>"Email Address or Password Not Matched"));
}
?>