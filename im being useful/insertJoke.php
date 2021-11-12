<?php
    $lastUpdatedHour = date("H");
    $lastUpdatedMin = date("i");
    $lastUpdatedDate = date("d/m/Y");
    $link = mysqli_connect("localhost", "root", "", "mynotes");
    $sql = "INSERT into jokes (hour, minute, dateOf) values ('$lastUpdatedHour','$lastUpdatedMin','$lastUpdatedDate')";
    $result = mysqli_query($link, $sql);
    mysqli_close($link);
?>