<?php

    session_start();
    if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"]))
    {
        include "signup_config.php";
        $sql = "SELECT * FROM login_user WHERE Email = '{$_SESSION["User_Email_insert"]}'";
        $result = mysqli_query($con,$sql);
        $row = mysqli_fetch_assoc($result);
        $flag = 0;
        for ($i=1; $i <=5 ; $i++) 
        { 
            $item = "ADD".$i;
            if($row[$item] != "NULL")
            {
                $flag+=1;
            }
            // echo $row[$item];
        }
        echo json_encode(array("status"=>true,"value"=>$_SESSION['User_Name_insert'],"cart"=>$flag));
    }
    else
    {
        echo json_encode(array("status"=>false));
    }

?>