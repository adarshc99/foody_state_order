<?php
include "signup_config.php";
session_start();
$get_email = $_SESSION['User_Email_insert'];
$sql = "SELECT * FROM login_user WHERE Email = '{$get_email}'";

$result = mysqli_query($con,$sql);

$row = mysqli_fetch_assoc($result);

$add_fav = array();

    $total_price = 0;
    for ($i=1; $i <=5 ; $i++) 
    { 
        $item = "ADD".$i;
        if($row[$item]!= "NULL")
        {
            $insert_food = "SELECT * FROM food WHERE ID = {$row[$item]}";
            $insert_result = mysqli_query($con,$insert_food);
            $get_result_row = mysqli_fetch_assoc($insert_result);
            // echo json_encode($get_result_row);
            

            $total_price += $get_result_row["Price"];

            array_push($add_fav,array_merge($get_result_row,array("add_to_cart_id"=>$i)));
        }
    }

array_push($add_fav,array("Total"=>$total_price));
echo json_encode($add_fav);

?>