<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);
include "signup_config.php";
$User_Vcode = mysqli_real_escape_string($con,$decode["Ucode"]);
$User_Vemail =mysqli_real_escape_string($con,$decode["Uemail"]);

$sql = "SELECT * FROM signup WHERE Email = '{$User_Vemail}' and Varification_Code = '{$User_Vcode}'";
$result = mysqli_query($con,$sql);

if(mysqli_num_rows($result)>0)
{
    $row = mysqli_fetch_assoc($result);
    session_start();
    $_SESSION['Uname'] = $row["Name"];
    $_SESSION['Uemail'] = $User_Vemail;
    echo json_encode(array("status"=>true));
}
else
{
    echo json_encode(array("status"=>false,"value"=>"Email Address or Code Not Matched"));
}
?>