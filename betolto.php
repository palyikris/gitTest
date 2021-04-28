<?php
    $token=$_POST['token'];//megkapja a hidden inputból a tokent
    $link = mysqli_connect("localhost", "root", "", "proba");
    if($token==='111' || $token==='222'){//megnézi, hogy ha az enyém vagy henié
        $sql = "SELECT ido,sender,uzi FROM henikristóf ORDER BY ido asc"; //a mi table-ünkbe inserteli
        $result = mysqli_query($link,$sql);
        if($result->num_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                if($row['sender']=="Kristóf"){
                echo "<tr><td>"."</td><td>"."</td><td class='sor3' colspan='2' title=".$row['ido'].">".$row['uzi']."</td></tr>";
                }
                else{
                    echo "<tr><td class='sor1' title=".$row['ido'].">".$row['uzi']."</td><td>"."</td><td>"."</td></tr>";
                }
            }
        }
    }//itt ugyanaz van mint a main-ben volt
    if($token==='111'){//ha én voltam aki insertelt az én oldalamra lépjen vissza
        header("Location: messageproba.php");
    } else if($token==='222'){//ha henié akkor az övéhez
        header("Location: messageproba1.php");
    }
?>