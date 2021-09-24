<?php
    $link = mysqli_connect("localhost", "root", "", "uzi_test");
    $sql = "SELECT ido,sender,uzi FROM kris ORDER BY ido asc";
    $result = mysqli_query($link,$sql);
    $hour=date("h:i:s");
    if($result->num_rows > 0){
	    while($row = mysqli_fetch_assoc($result)){
            $classToday = new stdClass();
            $classToday->msg = $row["msg"];
            $classToday->timeHour = $row["timeHour"];
            $classToday->timeMinute = $row["timeMinute"];
            $classToday->sender = $row["sender"];
            $classToday->sentTo = $row["sentTo"];
            $classToday->token = $row["token"];
        }
    }
?>