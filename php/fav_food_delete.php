<?php
include "signup_config.php";
$input = file_get_contents('php://input');
$decode = json_decode($input,true);
$Get_food_ID = $decode["food_ID"];

session_start();
if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"])) 
{

    $item = "ADD".$Get_food_ID;
    // $get_user_email = $_SESSION["User_Email_insert"];
    $sql  = "UPDATE login_user SET {$item}= 'NULL' WHERE Email = '{$_SESSION['User_Email_insert']}'";
    $sql_get_free_null_item = "SELECT * FROM login_user WHERE Email = '{$_SESSION['User_Email_insert']}'";
    $result = mysqli_query($con,$sql_get_free_null_item);
    $row = mysqli_fetch_assoc($result);
    $add_to_cart_free = 0;
        for ($i=1; $i <=5 ; $i++) 
        { 
            $item = "ADD".$i;
            if($row[$item] != "NULL")
            {
                $add_to_cart_free+=1;
            }
        }
    if(mysqli_query($con,$sql))
    {
        echo json_encode(array("status"=>true,"value"=>"Removed Successfully","cart"=>$add_to_cart_free));
    }
    else
    {
        echo json_encode(array("status"=>false,"value"=>"Sorry,item was not removed,plese try again"));
    }

}
?>