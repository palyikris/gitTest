
<?php
    $link = mysqli_connect("localhost", "root", "", "sanyi_bacsi_test");
    $sql = "SELECT classID, class, studentName, studentID, classStart, classEnd FROM classestoday ORDER BY classID";
    $result = mysqli_query($link,$sql);
    $classTodayArray= array();
        if($result->num_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                $classToday = new stdClass();
                $classToday->class = $row["class"];
                $classToday->studentName = $row["studentName"];
                $classToday->classStart = $row["classStart"];
                $classToday->classEnd = $row["classEnd"];
                array_push($classTodayArray, $classToday);
            }
        }
        $object = json_encode($classTodayArray);
        echo $object;
?>
