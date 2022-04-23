<?php
include "signup_config.php";
$input = file_get_contents('php://input');
$decode = json_decode($input,true);

session_start();
// echo $_SESSION['Uname'];
// echo $_SESSION['Uemail'];
if(isset($_SESSION['Uname']) && isset($_SESSION['Uemail'])) 
{
    // echo json_encode(array("status"=>true));
    $sql = "SELECT * FROM signup WHERE "
}
else{
    echo json_encode(array("status"=>false));
}

        

?>