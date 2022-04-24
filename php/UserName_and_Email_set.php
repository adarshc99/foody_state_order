<?php

    session_start();
    if(isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"]))
    {
        echo json_encode(array("status"=>true,"value"=>$_SESSION['User_Name_insert']));
    }
    else
    {
        echo json_encode(array("status"=>false));
    }

?>