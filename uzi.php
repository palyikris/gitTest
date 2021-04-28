<?php
    $link = mysqli_connect("localhost", "root", "", "loginsystem");
?>
<?php
        $date=date("d/m/Y");
        $hour=date("h:i:s");
        //$hour1=str_replace("/", ":", $hour);
        $today=$date." ".$hour;
        $sender="Kristóf";
        $uzi=$_POST['uzimuzi'];
        $sql="INSERT INTO kris (ido, sender, uzi) VALUES('$today', '$sender', '$uzi')";
        $result=mysqli_query($link, $sql);
        mysqli_close($link);
        header("Location: messagefelulet.php/#uziinputid");
?>