<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bejelentkezés</title>
    <style>
        .bejelform{
    top: 100px;
    margin-left: 28%;
    margin-right: auto;
    position: absolute;
    z-index: 10;
    background: rgb(8,219,142);
    background: radial-gradient(circle, rgba(8,219,142,1) 26%, rgba(26,237,138,1) 46%, rgba(70,252,185,1) 69%, rgba(71,243,174,1) 95%);
    color: white;
    font-weight: 500;
    border-radius: 4%;
    font-size: 22px;
    border: 0.5px solid gray;
    box-shadow: 0px 2px 6px 0px gray;
    transition: opacity 1s;
    opacity: 0;
    text-align: center;
    padding: 1% 2%;
    width: 40%
}
form{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    margin: 5% 20%;
    width: auto;
}
form input{
    width: 20%;
}
.bejeldiv1{
    padding: 5% 10%;
}
form > *{
    margin-top: 5%;
    max-width: 100%;
    overflow: hidden;
    font-size: 15px;
}
.adat{
    display: flex;
    align-items: center;
    flex-direction: row;
}
.adat input{
    width: 100%;
    margin-left: 5%;
    border: none;
    border-left: 2px solid  blueviolet;
    border-bottom: 2px solid  blueviolet;
    background-color: transparent;
}
form h2{
    font-size: 30px;
    margin-bottom: 50px;
}
@keyframes elotunik{
    from {transform: scale(0)} 
    to {transform: scale(1)}
}
.bejelentkezes span{
    float: right;
    margin-right: 20px;
    font-size: 30px;
}
.bejelentkezes h2{
    font-size: 30px;
}
#beadasbejelben{
    align-self: center;
    background-color: transparent;
    border: 3px solid white;
    padding: 5px 10px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    transition: all .6s;
    border-radius: 5%;
}
#beadasbejelben:hover{
    transform: scale(1.05);
}
.bejelbezar{
    float: right;
    font-weight: 1000;
    transition: all 0.4s;
}
.bejelbezar:hover{
    transform: scale(1.5);
    cursor: pointer;
}
.cbok{
    display: flex;
    flex-direction: row;
    align-items: center;
}
    </style>
</head>
<body>
<form action="sender.php" method="POST">
    <input name="uname" type="text">
    <input name="pwd" type="password">
    <button type="submit">Bejelentkezés</button>
</form>
<div class="bejelform" id="bejeldiv">
    <form action="sender.php" method="POST" id="bejelform">
        <h2>Jelentkezz be! </h2>
        <div class="adat">
            <label for="">FELHASZNÁLÓNÉV</label><input placeholder="Felhasználónév..." name="uname" required>
        </div>
        <div class="adat">
            <label for="">JELSZÓ</label><input placeholder="Jelszó..." name="psw" type="password" id="jelszo" required>
        </div>
        <div class="cbok">
            <label for="">EMLÉKEZZ RÁM</label><input type="checkbox" checked="checked">
        </div>
        <div class="cbok">
            <label for="">JELSZÓ LÁTHATÓ</label><input type="checkbox" id="lathato" onclick="lathatocheck()">
        </div>
        <button id="beadasbejelben">BEJELENTKEZÉS</button>
    </form>
</div>
     <script>
            function lathatocheck(){
                if(document.getElementById("lathato").checked==true){
                    document.getElementById("jelszo").type="text";
            }
            else{
                document.getElementById("jelszo").type="password";
                }
        }
     </script>
</body>
</html>