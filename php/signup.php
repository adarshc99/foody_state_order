<?php
include "signup_config.php";
$input = file_get_contents('php://input');
$decode = json_decode($input,true);
$User_name = mysqli_real_escape_string($con, $decode["Uname"]);
$Email_name = mysqli_real_escape_string($con, $decode["Uemail"]);
$Password_name = mysqli_real_escape_string($con, md5($decode["Upassword"]));
$Password_con_name = mysqli_real_escape_string($con, md5($decode["U_con_assword"]));
$Loction = mysqli_real_escape_string($con,$decode["Uloction"]);
$Random_number = rand(1000,9999);

$sql = "SELECT * FROM signup WHERE Email = '{$Email_name}'";
$result = mysqli_query($con,$sql);
if(mysqli_num_rows($result)>0)
{
    echo json_encode(array("status"=>false,"value"=>"User Already Exsist"));
    die();
}
$sql_insert = "INSERT INTO signup (Name,Email,Password,Location,Varification_Code) VALUES ('{$User_name}','{$Email_name}','{$Password_name}','{$Loction}','{$Random_number}')";

if(mysqli_query($con,$sql_insert))
{
    session_start();
    $_SESSION['Uname'] = $User_name;
    $_SESSION['Uemail'] = $Email_name;
    echo json_encode(array("status"=>true,"value"=>"User Inserted Successfully"));
   
}
else
{
    echo json_encode(array("status"=>false,"value"=>"Filaed To insert User"));
    die();
    
}



?>