<?php
    $subject = $_POST["subject"];
    if($subject == "magyar" || $subject == "irodalom"){
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "SELECT * FROM magyar order by id desc limit 1";
        $result = mysqli_query($link,$sql);
        $notesArray= array();
            if($result->num_rows > 0){
                while($row = mysqli_fetch_assoc($result)){
                    $notes = new stdClass();
                    $notes->id = $row["id"];
                    $notes->noteId = $row["noteId"];
                    $notes->noteContent = $row["noteContent"];
                    $notes->lastUpdatedHour = $row["lastUpdatedHour"];
                    $notes->lastUpdatedMin = $row["lastUpdatedMin"];
                    $notes->lastUpdatedDate = $row["lastUpdatedDate"];
                    array_push($notesArray, $notes);
                }
            }
            $object = json_encode($notesArray);
            echo $object;
    }
    if($subject == "biosz" || $subject == "biológia"){
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "SELECT * FROM biosz order by id desc limit 1";
        $result = mysqli_query($link,$sql);
        $notesArray= array();
            if($result->num_rows > 0){
                while($row = mysqli_fetch_assoc($result)){
                    $notes = new stdClass();
                    $notes->id = $row["id"];
                    $notes->noteId = $row["noteId"];
                    $notes->noteContent = $row["noteContent"];
                    $notes->lastUpdatedHour = $row["lastUpdatedHour"];
                    $notes->lastUpdatedMin = $row["lastUpdatedMin"];
                    $notes->lastUpdatedDate = $row["lastUpdatedDate"];
                    array_push($notesArray, $notes);
                }
            }
            $object = json_encode($notesArray);
            echo $object;
    }
    if($subject == "nyelvtan"){
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "SELECT * FROM nyelvtan order by id desc limit 1";
        $result = mysqli_query($link,$sql);
        $notesArray= array();
            if($result->num_rows > 0){
                while($row = mysqli_fetch_assoc($result)){
                    $notes = new stdClass();
                    $notes->id = $row["id"];
                    $notes->noteId = $row["noteId"];
                    $notes->noteContent = $row["noteContent"];
                    $notes->lastUpdatedHour = $row["lastUpdatedHour"];
                    $notes->lastUpdatedMin = $row["lastUpdatedMin"];
                    $notes->lastUpdatedDate = $row["lastUpdatedDate"];
                    array_push($notesArray, $notes);
                }
            }
            $object = json_encode($notesArray);
            echo $object;
    }
    if($subject == "angol"){
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "SELECT * FROM angol order by id desc limit 1";
        $result = mysqli_query($link,$sql);
        $notesArray= array();
            if($result->num_rows > 0){
                while($row = mysqli_fetch_assoc($result)){
                    $notes = new stdClass();
                    $notes->id = $row["id"];
                    $notes->noteId = $row["noteId"];
                    $notes->noteContent = $row["noteContent"];
                    $notes->lastUpdatedHour = $row["lastUpdatedHour"];
                    $notes->lastUpdatedMin = $row["lastUpdatedMin"];
                    $notes->lastUpdatedDate = $row["lastUpdatedDate"];
                    array_push($notesArray, $notes);
                }
            }
            $object = json_encode($notesArray);
            echo $object;
    }
    if($subject == "töri" || $subject == "történelem"){
        $link = mysqli_connect("localhost", "root", "", "mynotes");
        $sql = "SELECT * FROM tori order by id desc limit 1";
        $result = mysqli_query($link,$sql);
        $notesArray= array();
            if($result->num_rows > 0){
                while($row = mysqli_fetch_assoc($result)){
                    $notes = new stdClass();
                    $notes->id = $row["id"];
                    $notes->noteId = $row["noteId"];
                    $notes->noteContent = $row["noteContent"];
                    $notes->lastUpdatedHour = $row["lastUpdatedHour"];
                    $notes->lastUpdatedMin = $row["lastUpdatedMin"];
                    $notes->lastUpdatedDate = $row["lastUpdatedDate"];
                    array_push($notesArray, $notes);
                }
            }
            $object = json_encode($notesArray);
            echo $object;
    }
?>