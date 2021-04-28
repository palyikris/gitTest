<?php
    $link = mysqli_connect("localhost", "root", "", "proba")
    ?>
<?php
        $date=date("d/m/Y");
        $hour=date("h:i:s");
        //$hour1=str_replace("/", ":", $hour);
        $today=$date." ".$hour;
        $sender="Heni";
        $uzi=$_POST['uzimuzi'];
        $sql="INSERT INTO probakh (ido, sender, uzi) VALUES('$today', '$sender', '$uzi')";
        $result=mysqli_query($link, $sql);
        mysqli_close($link);
        header("Location: messageproba1.php");
?>