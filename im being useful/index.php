<?php
    $noteId = "main";
    $content = $_POST["content"];
    $subject = $_POST["subject"];
    if($subject == "magyar" || $subject == "irodalom"){
        $lastUpdatedHour = date("H");
        $lastUpdatedMin = date("i");
        $lastUpdatedDate = date("d/m/Y");
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "INSERT into magyar (noteId, noteContent, lastUpdatedHour, lastUpdatedMin, lastUpdatedDate) values ('$noteId','$content','$lastUpdatedHour','$lastUpdatedMin','$lastUpdatedDate')";
        $result = mysqli_query($link, $sql);
        mysqli_close($link);
    }
    if($subject == "töri" || $subject == "történelem"){
        $lastUpdatedHour = date("H");
        $lastUpdatedMin = date("i");
        $lastUpdatedDate = date("d/m/Y");
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "INSERT into tori (noteId, noteContent, lastUpdatedHour, lastUpdatedMin, lastUpdatedDate) values ('$noteId','$content','$lastUpdatedHour','$lastUpdatedMin','$lastUpdatedDate')";
        $result = mysqli_query($link, $sql);
        mysqli_close($link);
    }
    if($subject == "nyelvtan"){
        $lastUpdatedHour = date("H");
        $lastUpdatedMin = date("i");
        $lastUpdatedDate = date("d/m/Y");
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "INSERT into nyelvtan (noteId, noteContent, lastUpdatedHour, lastUpdatedMin, lastUpdatedDate) values ('$noteId','$content','$lastUpdatedHour','$lastUpdatedMin','$lastUpdatedDate')";
        $result = mysqli_query($link, $sql);
        mysqli_close($link);
    }
    if($subject == "biosz" || $subject == "biológia"){
        $lastUpdatedHour = date("H");
        $lastUpdatedMin = date("i");
        $lastUpdatedDate = date("d/m/Y");
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "INSERT into biosz (noteId, noteContent, lastUpdatedHour, lastUpdatedMin, lastUpdatedDate) values ('$noteId','$content','$lastUpdatedHour','$lastUpdatedMin','$lastUpdatedDate')";
        $result = mysqli_query($link, $sql);
        mysqli_close($link);
    }
    if($subject == "angol"){
        $lastUpdatedHour = date("H");
        $lastUpdatedMin = date("i");
        $lastUpdatedDate = date("d/m/Y");
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "INSERT into angol (noteId, noteContent, lastUpdatedHour, lastUpdatedMin, lastUpdatedDate) values ('$noteId','$content','$lastUpdatedHour','$lastUpdatedMin','$lastUpdatedDate')";
        $result = mysqli_query($link, $sql);
        mysqli_close($link);
    }
?>