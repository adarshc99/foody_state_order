<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);
include "signup_config.php";
$User_Vcode = mysqli_real_escape_string($con,$decode["Ucode"]);
$User_Vemail =mysqli_real_escape_string($con,$decode["Uemail"]);

$sql = "SELECT * FROM signup WHERE Email = '{$User_Vemail}' and Varification_Code = '{$User_Vcode}'";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
if($row["Entered_Code"] == "YES")
{
    echo json_encode(array("status"=>false,"value"=>"You Have Already Varified Your Email,Please Go To Login"));
    die();
}

if(mysqli_num_rows($result)>0)
{
    
    session_start();
    $_SESSION['Uname'] = $row["Name"];
    $_SESSION['Uemail'] = $User_Vemail;
    $name = $row["Name"];
    $email = $row["Email"];
    $password = $row["Password"];
    $location = $row["Location"];

    $sql_insert_login = "INSERT INTO login_user(Name,Email,Password,Loction) VALUES ('{$name}','{$email}','{$password}','{$location}')";
                
    $sql_update_Entered_code = "UPDATE signup SET Entered_Code = 'YES' WHERE Email = '{$_SESSION["Uemail"]}'";
    if(!(mysqli_query($con,$sql_insert_login)) || !(mysqli_query($con,$sql_update_Entered_code)))
    {
        echo json_encode(array("status"=>false,"value"=>"Query Failed")); // insert user to login
        die();
    }
    echo json_encode(array("status"=>true));
}
else
{
    echo json_encode(array("status"=>false,"value"=>"Email Address or Code Not Matched"));
}
?>