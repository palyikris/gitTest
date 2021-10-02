<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="test"></div>
</body>
</html>
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
echo "<script>document.getElementById('test').innerHTML='$msg','$sender','$sentTo','$timeHour','$timeMinute','$dateMonAndYear','$token'</script>";
$link = mysqli_connect("localhost", "root", "", "test");
$sql = "INSERT into kristófheni (msg, sender, sentTo, timeHour, timeMinute, dateMonAndYear, token) values ('$msg','$sender','$sentTo','$timeHour','$timeMinute','$dateMonAndYear','$token')";
$result = mysqli_query($link, $sql);
mysqli_close($link);
header("Location: index.html#randomDivId");
?>