<?php
    $link = mysqli_connect("localhost", "root", "", "proba")
    ?>
<?php
        $token=$_POST['token'];
        if($token==='111'){
            $sender='Kristóf';
            $receiver='Heni';
        } else if($token==='222'){
            $sender='Heni';
            $receiver='Kristóf';
        }
        $date=date("d/m/Y"); 
        $hour=date("h:i:s");
        $today=$date." ".$hour;
        $uzi=$_POST['uzimuzi'];
        $sql="INSERT INTO henikristóf (ido, sender, receiver, token, uzi) VALUES('$today', '$sender', '$receiver', '$token', '$uzi')";
        $result=mysqli_query($link, $sql);
        //$sql="SELECT MAX(id) FROM probakh;";
        //$result=mysqli_query($link, $sql);
        //echo "<script>var lastid="+$result+"</script>";
        mysqli_close($link);
        header("Location: messageproba.php");
?>