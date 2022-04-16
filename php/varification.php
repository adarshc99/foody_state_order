<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);

$V_code = $decode["Varification_Code"];
session_start();
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