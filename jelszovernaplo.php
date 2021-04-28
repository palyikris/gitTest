<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $felhheni="KerekesHeni";
    $psw="kristofegyisten";
    if($_POST['uname']==$felhheni && $_POST['psw']==$psw){
        echo "<script> window.location.href='naplo.html'</script>";
    }
    else{
        echo "<script> alert('Rossz felhasználónév vagy jelszó')</script>";
    }

    ?>
</body>
</html>