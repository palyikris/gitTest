<?php
    $link = mysqli_connect("localhost", "uzimuzi", "krilona2004", "uzimuzi", "3306")
    ?>
<?php
        $date=date("d/m/Y");
        $hour=date("h:i:s");
        //$hour1=str_replace("/", ":", $hour);
        $today=$date." ".$hour;
        $sender="Lelle";
        $uzi=$_POST['uzimuzi'];
        $sql="INSERT INTO kl (ido, sender, uzi) VALUES('$today', '$sender', '$uzi')";
        $result=mysqli_query($link, $sql);
        mysqli_close($link);
        header("Location: messagefeluletkl.php/#uziinputid");
?>