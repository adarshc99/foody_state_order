<?php

session_start();

session_unset();

session_destroy();
if(!((isset($_SESSION["User_Name_insert"]) && isset($_SESSION["User_Email_insert"]))))
{
    echo json_encode(array("status"=>true));
}
else{
    echo json_encode(array("status"=>false));
}

?>  