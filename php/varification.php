<?php

$input = file_get_contents('php://input');
$decode = json_decode($input,true);
include "signup_config.php";
$V_code = mysqli_real_escape_string($con,$decode["Varification_Code"]);

session_start();

if(isset($_SESSION['Uemail']) && isset($_SESSION["Uname"]))
{
    $sql = "SELECT * FROM signup WHERE Email = '{$_SESSION["Uemail"]}'";
    // if(mysqli_num_rows($))
    $result = mysqli_query($con,$sql);
    
        while($row = mysqli_fetch_assoc($result))
        {
            if($V_code == $row["Varification_Code"])
                {
                    $sql_insert_login = "INSERT INTO login_user(Name,Email,Password,Loction) VALUES ('{$row["Name"]}','{$row["Email"]}','{$row["Password"]}','{$row["Location"]}')";

                    
                    $_SESSION["User_Name_insert"] = $row["Name"];
                    $_SESSION["User_Email_insert"] = $row["Email"];
                    if(!(mysqli_query($con,$sql_insert_login)))
                    {
                        echo json_encode(array("status"=>false,"value"=>"Query Failed"));
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
    
    
}
else{
    echo json_encode(array("status"=>false,"value"=>3)); // session is not set
}






?>