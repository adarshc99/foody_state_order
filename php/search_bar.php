<?php

include "signup_config.php";
$input = file_get_contents('php://input');
$decode = json_decode($input,true);
$Search_term = mysqli_real_escape_string($con, $decode["search"]);

$sql = "SELECT * FROM food WHERE Food_Name LIKE '%{$Search_term}%' OR Price LIKE '%{$Search_term}%' OR Shop_Name LIKE '%{$Search_term}%'";

$result = mysqli_query($con,$sql);
if(mysqli_num_rows($result)>0)
{
    echo json_encode((mysqli_fetch_all($result,MYSQLI_ASSOC)));
    
}
else
{
    echo json_encode(array("status"=>false));
}


?>