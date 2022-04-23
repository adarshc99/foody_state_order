<?php

    session_start();
    if(isset($_SESSION['Uname']) && isset($_SESSION['Uemail']))
    {
        echo json_encode(array("status"=>true));
    }
    else
    {
        echo json_encode(array("status"=>false));
    }

?>