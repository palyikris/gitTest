setInterval(() => {
    const xmlhttp = new XMLHttpRequest();

        xmlhttp.onload = function() {
            const currentMsg = JSON.parse(this.responseText);
            console.log(currentMsg);
                for(let i = 0; i>currentMsg.length-1; i++){
                    if(currentMsg[i].sender==="kristóf"){
                        document.getElementById("msgTableId").innerHTML="<tr><td></td><td></td><td></td><td></td><td class'msgRight'>"+currentMsg[i].msg+"</td></tr>"
                    }
                    else{
                        document.getElementById("msgTableId").innerHTML="<tr><td class'msgLeft'>"+currentMsg[i].msg+"</td><td></td><td></td><td></td><td></td></tr>"
                    }
                }
        }
        xmlhttp.open("GET", "fetcher.php");
        xmlhttp.send();
}, 2000);