
<?php
//$sentObj = file_get_contents('php://input');
//$decObj = json_decode($sentObj, true);
//echo $decObj;
$msg = $_POST["msg"];
$sender = "kristof";
$sentTo = "heni";
$timeHour = date("H");
$timeMinute = date("i");
$dateMonAndYear = date("d/m/Y");
$token = "111";
$link = mysqli_connect("localhost", "uzimuzi", "krilona2004", "uzimuzi", "3306")
$sql = "INSERT into kristófheni (msg, sender, sentTo, timeHour, timeMinute, dateMonAndYear, token) values ('$msg','$sender','$sentTo','$timeHour','$timeMinute','$dateMonAndYear','$token')";
$result = mysqli_query($link, $sql);
mysqli_close($link);
header("Location: index.html#randomDivId");
?>