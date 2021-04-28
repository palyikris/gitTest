<?php
    $link = mysqli_connect("localhost", "uzimuzi", "krilona2004", "uzimuzi", "3306")

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Üzimüzi</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" href="heni.jpg">
    <style>

body, html{
    padding: 0;
    margin: 0;
    font-family: "Nunito";
    padding-bottom: 5%;
}
.cim{
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(8,219,142);
    font-weight: 900;
    font-size: xx-large;
    flex-wrap: wrap;
}
.cim p{
    border: 2px solid rgb(8,219,142);
    padding: 5% 10%;
    font-size: 22px;
    font-weight: 600;
    margin: 5% 20%;
    text-align: center;
}
table{
    background-color: whitesmoke;
    font-size: 19px;
    font-weight: 600;
    color: white;
}
#twrapper {
  position:relative;
  width: 100%;
}
#tscroll {
  height:450px;
  overflow:auto;  
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
  background-color: whitesmoke;
  width: 70%;
}
#twrapper table {
  width:100%;

}
.fo {
  height:20px;
  width:35%;
  color: white;
  font-weight: 1000;
  font-size: 25px;
  border-bottom: 1px solid blueviolet;
}
td{
    text-align: center;
    width: 10%;
    padding: 0;
    word-break: break-all;
    word-wrap: break-word;
}
input{
    border: none;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    width: 35%;
    background-color: transparent;
    color: black;
}
button{
    border: 2px solid rgb(8,219,142);
    background-color: transparent;
    margin-left: 3%;
}
button:hover{
    transform: scale(1.2);
}
i{
    font-size: 20px;
    color: rgb(8,219,142);
}
footer{
    width: 100%;
    height: 50%;
    padding: 80px 0 40px 0;
    background: rgb(8,219,142);
    background: radial-gradient(circle, rgba(8,219,142,1) 26%, rgba(26,237,138,1) 46%, rgba(70,252,185,1) 69%, rgba(71,243,174,1) 95%);
    text-align: center;
    font-size: 21px;
    font-weight: 600;
    color: white;
    margin:0;
    margin-top: 10%;
}
.sor1{
    text-align: left;
    border: 2px solid transparent;
    border-radius: 5px 20px 20px 5px;
    padding-left: 1%;
    background-color: lightgray;
    color: black;
    font-weight: 800;
    margin-top: 10px;
}
.sor2{
    text-align: center;
}
.sor3{
    text-align: right;
    border: 2px solid transparent;
    border-radius: 20px 5px 5px 20px;
    padding-right: 1%;
    background-color: lightgray;
    color: black;
    font-weight: 800;
    margin-top: 10px;
}
#nev{
    display: flex;
    margin-top:0px;
    padding: 0;
    width: 70%;
    height: 60px;
    background-color: whitesmoke;
}
#nev a{
    text-decoration: none;
    color: rgb(8,219,142);
    font-weight: 700;
    transition: background-color 0.5s;
    text-align: center;
    padding: 20px 30px;
    text-transform: uppercase;
}
#elso{
    text-decoration: none;
    color: rgb(8,219,142);
    font-weight: 700;
    transition: background-color 0.5s;
    text-align: center;
    padding: 20px 30px;
    text-transform: uppercase;
    margin: 0;
}
#nev a:active{
    background-color: lightgrey;
}
#nev a:hover{
    background-color: lightgrey;
}

    </style>
</head>
<body>
<script>
    window.onload=function(){
        window.location="#uziinputid"
    }
</script>
<div class="cim">
    <h1>ÜZIMÜZI</h1>
    <p>A HeniFanPage-en most már beszélgethetsz is a barátaiddal! Próbáld ki legújabb üzenetküldő alkalmazásunkat!</p>
</div>
<div id="twrapper">
<div id="nev">
    <p id="elso">Barátaid:</p>
    <a href="messagefelulet.php" style="background-color: lightgray;">Heni</a>
    <a href="messagefeluletkl1.php">Lelle</a>
    <a href="messagefeluletkm.php">Máté</a>
    <a href="&">Megint más</a>
</div>
    <div id="tscroll">
<table class="kijelzo" id="kijelzoid">
	<tr>
		<th></th>
	</tr>

<?php 
$sql = "SELECT ido,sender,uzi FROM kris ORDER BY ido asc";
$result = mysqli_query($link,$sql);
$hour=date("h:i:s");
if($result->num_rows > 0){
	while($row = mysqli_fetch_assoc($result)){
        if($row['sender']=="Kristóf"){
		echo "<tr><td>"."</td><td>"."</td><td class='sor3' colspan='2' title=".$hour.">".$row['uzi']."</td></tr>";
        }
        else{
            echo "<tr><td class='sor1' title=".$hour.">".$row['uzi']."</td><td>"."</td><td>"."</td></tr>";
        }
    }
}
 ?>
    <tr>
        <td colspan="3"><form class="uzenetekform" id="uzenetekformid" action="insertelo.php" method="POST">
            <input type="text" class="uziinput" name="uzimuzi" id="uziinputid">
            <button type="submit" class="uzibtn" id="uzibtnid" id="uzibtnid"><i class="fa fa-location-arrow"></i></button> 
    </form></td>
    </tr>
 </table>
    </div>
</div>
<?php
    mysqli_close($link);
?>
<script>

</script>
<!--<footer>
    <p>Ezt az oldalt a <span class="oldalneve" style="font-size: 25px">WeLoveHeni</span> támogatta</p><br>
    <p>Copyright: <strong>Pályi Kristóf</strong>, professzionális webdesigner, zenész, videós, producer, direktor, színész, isten</p>
    <i class="fa fa-btc"></i> <p>Donét-link: </p><a style="text-decoration: none;" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Kattints ide, hogy adományozhass</a>
    <p><b><italics>Támogatóink</italics></b></p><br><i style="margin: 0 10px 0 10px" class="fa fa-edge"></i><i style="margin: 0 10px 0 10px" class="fa fa-facebook-official"></i><i style="margin: 0 10px 0 10px" class="fa fa-reddit"></i><i style="margin: 0 10px 0 10px" class="fa fa-youtube"></i>
</footer>-->
</body>
</html>