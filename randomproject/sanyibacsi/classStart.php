<?php
$link = mysqli_connect("localhost", "root", "", "sanyi_bacsi_test");
$sql = "SELECT studentName, classStart FROM classestoday ORDER BY classID";
$result = mysqli_query($link,$sql);
$classStartArray= array();
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            $classStart = new stdClass();
            $classStart->classSt = $row["classStart"];
            $classStart->studentName = $row["studentName"];
            array_push($classStartArray, $classStart);
        }
    }
    $object = json_encode($classStartArray);
    echo $object;
?>