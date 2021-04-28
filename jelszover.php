<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jelszó ellenőrzés</title>
</head>
<body>
    <?php
    $felhheni="Kerekes Henrietta";
    $felhkris="Pályi Kristóf";
    $psw="haha";
    if($_POST['uname']==$felhheni && $_POST["psw"]==$psw){
        echo "<script> window.location.href='photoslide.html'</script>";
    }

    ?>
</body>
</html>