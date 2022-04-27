<?php

include "signup_config.php";
session_start();
if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"]))
{
    $sql = "SELECT * FROM login_user WHERE Email = '{$_SESSION["User_Email_insert"]}'";
    $result = mysqli_query($con,$sql);
    if(mysqli_num_rows($result)>0)
    {
        $cart = 0;
        $row = mysqli_fetch_assoc($result);
        for ($i=1; $i <=5 ; $i++) 
        { 
            $add = "ADD".$i;
        
            if($row[$add]!="NULL")
            {
                $cart+=1;
            }
        }
    }
   echo json_encode(array("cart"=>$cart,"status"=>true));
}
else
{
    echo json_encode(array("status"=>false));
}



?>