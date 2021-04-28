<?php
    $uname=$_POST['uname'];
    $pwd=$_POST['pwd'];
    if($uname=="Kristóf" || $pwd=="haha"){
        header("Location: messagefelulet.php");
    }
    if($uname=="Heni" || $pwd=="hehe"){
        header("Location: messagefelulet1.php");
    }
    if($uname=="Lelle"|| $pwd=="hihi"){
        header("Location: messagefeluletkl.php");
    }
    if($uname=="Máté" || $pwd=="huhu"){
        header("Location: messagefeluletmk.php");
    }
    else{
        echo "<script>alert('Rossz felhasználónév vagy jelszó');</script>";
    }
?>