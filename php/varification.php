<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);
include "signup_config.php";
$V_code = mysqli_real_escape_string($con,$decode['Varification_Code']);

session_start();





if(isset($_SESSION['Uemail']) && isset($_SESSION['Uname']))
{
    $sql = "SELECT * FROM signup WHERE Email = '{$_SESSION["Uemail"]}'";
    // if(mysqli_num_rows($))
    $result = mysqli_query($con,$sql);

        $row = mysqli_fetch_assoc($result);
        if($row["Entered_Code"] == "YES")
        {
            echo json_encode(array("status"=>false,"value"=>4));
            die();
        }
    
    
        
        
        if($V_code == $row["Varification_Code"]) // check user code
            {
                $name = $row["Name"];
                $email = $row["Email"];
                $password = $row["Password"];
                $location = $row["Location"];
                $sql_insert_login = "INSERT INTO login_user(Name,Email,Password,Loction) VALUES ('{$name}','{$email}','{$password}','{$location}')";
                
               

                $sql_update_Entered_code = "UPDATE signup SET Entered_Code = 'YES' WHERE Email = '{$_SESSION["Uemail"]}'";

            
                
                $_SESSION["User_Name_insert"] = $row["Name"];
                $_SESSION["User_Email_insert"] = $row["Email"];
                
                if(!(mysqli_query($con,$sql_insert_login)) || !(mysqli_query($con,$sql_update_Entered_code)))
                {
                    echo json_encode(array("status"=>false,"value"=>"Query Failed")); // insert user to login
                    die();
                }
                echo json_encode(array("status"=>true,"value"=>1)); // Mathched Varification
                // header('Location: http://localhost/foody_state/products_page.html');
            }
            else
            {
                echo json_encode(array("status"=>false,"value"=>2)); // Wrong Varifivction Code

            }
        
    
    
}
else{
    echo json_encode(array("status"=>false,"value"=>3)); // session is not set
}






?>