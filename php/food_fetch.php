<?php
    include "signup_config.php";
    $sql = "SELECT * FROM food";
    $result = mysqli_query($con,$sql) or die("Query failed ....");
    if(mysqli_num_rows($result)>0)
    {
        $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
        array_push($output,array("status"=>true));
        echo json_encode($output);
    }
    else
    {
        echo json_encode(array("status"=>false));
    }





?>