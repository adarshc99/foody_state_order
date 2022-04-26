<?php
include "signup_config.php";
$input = file_get_contents('php://input');
$decode = json_decode($input,true);
$Get_food_ID = $decode["food_ID"];

session_start();
if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"])) 
{
    $get_user_email = $_SESSION["User_Email_insert"];
    $sql = "SELECT * FROM login_user WHERE Email = '{$_SESSION['User_Email_insert']}'";
    $result = mysqli_query($con,$sql);
    if(mysqli_num_rows($result)>0)
    {
        $row = mysqli_fetch_assoc($result); 
        // echo "<pre>";
        // print_r($row);
        $add_to_cart_free = 0;
        for ($i=1; $i <=5 ; $i++) 
        { 
            $item = "ADD".$i;
            if($row[$item] != "NULL")
            {
                $add_to_cart_free+=1;
            }
            // echo $row[$item];
        }
        if($add_to_cart_free == 5)
        {
            echo json_encode(array("status"=>false,"value"=>"You cart is full,Please empty your cart"));
            die();
        }
        $flag = 0;
        for ($i=1; $i <=5 ; $i++) 
        { 
            $item = "ADD".$i;
            if($row[$item] == "NULL")
            {
                $sql_insert_cart = "UPDATE login_user SET ".$item. "= {$Get_food_ID} WHERE ID = {$row['ID']}";
                // echo json_encode(array("value"=>$sql_insert_cart));
                if(mysqli_query($con,$sql_insert_cart))
                {
                    echo json_encode(array("status"=>true,"cart"=>$add_to_cart_free,"value"=>"Item added successfully"));
                    die();
                }
                else
                {
                    echo json_encode(array("status"=>false,"value"=>"There was some problem,Please try again"));
                }
            }
        }   
    }  
}
else{
    echo json_encode(array("status"=>false));
}

        

?>