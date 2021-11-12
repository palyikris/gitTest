<?php
    $link = mysqli_connect("localhost", "root", "", "mynotes");
    $sql = "SELECT * FROM jokes group by dateOf";
    $result = mysqli_query($link,$sql);
    $jokesArray= array();
        if($result->num_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                $jokes = new stdClass();
                $jokes->id = $row["id"];
                $jokes->hour = $row["hour"];
                $jokes->minute = $row["minute"];
                $jokes->dateOf = $row["dateOf"];
                array_push($jokesArray, $jokes);
            }
        }
        $object = json_encode($jokesArray);
        echo $object;
?>