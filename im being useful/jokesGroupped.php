<?php
    $link = mysqli_connect("localhost", "root", "", "mynotes");
    $sql = "SELECT count(id) as id FROM jokes group by dateOf order by id desc limit 4";
    $result = mysqli_query($link,$sql);
    $jokesArray= array();
        if($result->num_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                $jokes = new stdClass();
                $jokes->id = $row["id"];
                array_push($jokesArray, $jokes);
            }
        }
        $object = json_encode($jokesArray);
        echo $object;
?>