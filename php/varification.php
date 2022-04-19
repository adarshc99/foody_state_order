<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);

$V_code = mysqli_real_escape_string($con,$decode["Varification_Code"]);
session_start();

if(isset($_SESSION['Uemail']) && isset($_SESSION["Uname"]))
{
    $sql = "SELECT Varification_Code FROM signup WHERE Email <> `{$_SESSION['Uemail']}`";
    // if(mysqli_num_rows($))
}


if($V_code == "123")
{
   
    echo json_encode(array("status"=>true,"value"=>$_SESSION["Uname"]));
    // header('Location: http://localhost/foody_state/products_page.html');
}
else
{
    echo json_encode(array("status"=>false,"value"=>$_SESSION["Uname"]));

}



?>