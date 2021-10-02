var greatestI = null;
window.onload = function(){
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const currentMsg = JSON.parse(this.responseText);
    for(let i = 0; i<currentMsg.length; i++){
        if(currentMsg[i].id>greatestI){
            console.log(currentMsg[i].id>greatestI);
            greatestI = currentMsg[i].id;
            console.log(greatestI);
        }
        if(currentMsg[i].sender==="kristof"){
            document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+currentMsg[i].msg+"</div></div>";
        }
        else{
            document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+currentMsg[i].msg+"</div></div>";
        }
    }
}
xmlhttp.open("GET", "fetcher.php");
xmlhttp.send();
}
setInterval(function(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const currentMsg = JSON.parse(this.responseText);
        for (let i = 0; i<currentMsg.length; i++){
            console.log(currentMsg[i].id)
            console.log(greatestI)
            console.log(currentMsg[i].id>greatestI)
            if(currentMsg[i].id>greatestI){
                greatestI = currentMsg[i].id;
                if(currentMsg[i].sender==="kristof"){
                    getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+currentMsg[i].msg+"</div></div>";
                }
                else{
                    document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+currentMsg[i].msg+"</div></div>";
                }
            }
        }
    }
    xmlhttp.open("GET", "fetcher.php");
    xmlhttp.send();
}, 2000);
document.getElementById("msgTableInput").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
   if (event.keyCode === 13) {
    // Cancel the default action, if needed
   event.preventDefault();
   // Trigger the button element with a click
   document.getElementById("msgButton").click();
}
})
/*function sendMsg(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "inserter.php");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};
    const sentMsg = document.getElementById("msgTableInput").value;
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const token = "111";
    const sentObj = {
        "sender" : "kristof",
        "sentTo" : "heni",
        "msg" : sentMsg,
        "hour" : hour,
        "minute" : minute,
        "monAndYear" : day+"/"+month+"/"+year,
        "token" : token
    }
    console.log(sentObj);
    xhr.send(sentObj);

}*/