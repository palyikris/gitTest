<?php
    $link = mysqli_connect("localhost", "root", "", "test");
    $sql = "SELECT * FROM kristófheni";
    $result = mysqli_query($link,$sql);
    $msgArray= array();
        if($result->num_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                $msg = new stdClass();
                $msg->id = $row["id"];
                $msg->msg = $row["msg"];
                $msg->sender = $row["sender"];
                $msg->sentTo = $row["sentTo"];
                $msg->timeHour = $row["timeHour"];
                $msg->timeMinute = $row["timeMinute"];
                $msg->dateMonAndYear = $row["dateMonAndYear"];
                $msg->token = $row["token"];
                array_push($msgArray, $msg);
            }
        }
        $object = json_encode($msgArray);
        echo $object;
?>