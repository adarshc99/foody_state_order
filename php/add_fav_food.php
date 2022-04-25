<?php
include "signup_config.php";
$input = file_get_contents('php://input');
$decode = json_decode($input,true);
$Get_food_ID = $decode["food_ID"];

session_start();
// echo $_SESSION['Uname'];
// echo $_SESSION['Uemail'];
if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"])) 
{
    $get_user_email = $_SESSION["User_Email_insert"];
    // echo $_SESSION["User_Email_insert"];
    $sql = "SELECT * FROM login_user WHERE Email = '{$_SESSION['User_Email_insert']}'";
    // echo $sql."</br>";
    $result = mysqli_query($con,$sql);

    if(mysqli_num_rows($result)>0)
    {
        
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        if($output[0]["ADD_NEXT"]<=5 && $output[0]["ADD_NEXT"]>0)
        {
            $sql_insert_cart = "UPDATE login_user SET ADD".$output[0]["ADD_NEXT"]. "= {$Get_food_ID} WHERE ID = {$output[0]['ID']};";
            $sql_insert_cart .= "UPDATE login_user SET ADD_NEXT = (ADD_NEXT+1) WHERE ID = {$output[0]['ID']}"; // Upadte add_next and add item in DB
            if(mysqli_multi_query($con,$sql_insert_cart))
            {
                echo json_encode(array("status"=>true,"cart"=>$output[0]["ADD_NEXT"],"value"=>"Item added successfully"));
            }
            else
            {
                echo json_encode(array("status"=>false,"value"=>"There was some problem,Please try again"));
            }

            
        }
        else
        {
            echo json_encode(array("status"=>false,"value"=>"You cart is full,Please empty your cart"));

        }
      



    }
   
    

    
    
}
else{
    echo json_encode(array("status"=>false));
}

        

?>