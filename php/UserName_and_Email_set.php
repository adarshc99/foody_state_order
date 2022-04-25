<?php

    session_start();
    if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"]))
    {
        include "signup_config.php";
        $sql = "SELECT ADD_NEXT FROM login_user WHERE Email = '{$_SESSION["User_Email_insert"]}'";
        $result = mysqli_query($con,$sql);
        $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode(array("status"=>true,"value"=>$_SESSION['User_Name_insert'],"cart"=>$row[0]["ADD_NEXT"]-1));
    }
    else
    {
        echo json_encode(array("status"=>false));
    }

?>