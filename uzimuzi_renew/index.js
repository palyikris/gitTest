var greatestI = 0;
/*window.onload = function(){
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const currentMsg = JSON.parse(this.responseText);
    for(let i = 0; i<currentMsg.length; i++){
        if(currentMsg[i].id>greatestI){
            console.log(currentMsg[i].id>greatestI);
            greatestI = currentMsg[i].id;
            console.log(greatestI);
        }
        if(currentMsg[i].sender==="heni"){
            document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+currentMsg[i].msg+"</div></div>";
        }
        else{
            document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+currentMsg[i].msg+"</div></div>";
        }
    }
}
xmlhttp.open("GET", "fetcher.php");
xmlhttp.send();
}*/
setInterval(function(){
    const msgs = [];
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const currentMsg = JSON.parse(this.responseText);
        for (let i = currentMsg.length-1; i>=0; i--){
            msgs.push(currentMsg[i]);

            /*for (let j = 0; i<msgs.length; i++){
                
            }
            /*if(parseInt(currentMsg[i].id)>parseInt(greatestI)){
                greatestI = currentMsg[i].id;
                var msgI = i;
                if(currentMsg[i].sender==="kristof"){
                    document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+currentMsg[msgI].msg+"</div></div>";
                }
                else{
                    document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+currentMsg[msgI].msg+"</div></div>";
                }
            }*/
        }
        for(let i = 0; i<msgs.length; i++){
            //console.log(msgs);
            console.log(parseInt(msgs[i].id))
            console.log(parseInt(greatestI))
            console.log(parseInt(msgs[i].id)>parseInt(greatestI))
            if(parseInt(msgs[i].id)>parseInt(greatestI)){
                greatestI = msgs[i].id;
                var msgI = i;
                if(msgs[msgI].sender==="kristof"){
                    //if(msgs[msgI].timeHour===msgs[msgI-1].timeHour && msgs[msgI-1].timeMinute-msgs[msgI].timeMinute>=10){
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+msgs[msgI].msg+"</div></div>";
                    //}
                    //else{
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        //document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                    //}                
                }
                else{
                    //if(msgs[msgI].timeHour===msgs[msgI-1].timeHour && msgs[msgI-1].timeMinute-msgs[msgI].timeMinute>=10){
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        //document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"' style='margin-top:15px'>"+msgs[msgI].msg+"</div></div>";
                    //}
                    //else{
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+msgs[msgI].msg+"</div></div>";
                    //}
                }
            }
            else{
                document.title="Üzimüzi";
            }
        }
    }
    xmlhttp.open("GET", "fetcher.php");
    xmlhttp.send();
}, 500);

document.getElementById("msgTableInput").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
   if (event.keyCode === 13) {
    // Cancel the default action, if needed
   event.preventDefault();
   // Trigger the button element with a click
   document.getElementById("msgButton").click();
}
})
document.getElementById("msgTableInput").addEventListener("keyup", function(event){
if(event.keyCode === 27){
    document.getElementById("randomDivId").style.position="fixed";
    document.getElementById("randomDivId").style.zIndex="1";
    document.getElementById("randomDivId").style.width="100%";
    document.getElementById("randomDivId").style.top="0";
    document.getElementById("randomDivId").style.height="100%";
}
})
function zoom(){
    if(document.getElementById("randomDivId").style.display==="flex"){
        document.getElementById("randomDivId").style.position="fixed";
        document.getElementById("randomDivId").style.zIndex="1";
        document.getElementById("randomDivId").style.width="100%";
        document.getElementById("randomDivId").style.top="0";
        document.getElementById("randomDivId").style.height="100%";
    }
    else{
        document.getElementById("randomDivId").style.position="flex";
        document.getElementById("randomDivId").style.zIndex="0";
        document.getElementById("randomDivId").style.width="80%";
        document.getElementById("randomDivId").style.height="auto";
    }
}
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
function mm(){
    document.getElementById("msgTableId").innerHTML="";
    greatestI = 0;
    const msgs = [];
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const currentMsg = JSON.parse(this.responseText);
        for (let i = currentMsg.length-1; i>=0; i--){
            msgs.push(currentMsg[i]);

            /*for (let j = 0; i<msgs.length; i++){
                
            }
            /*if(parseInt(currentMsg[i].id)>parseInt(greatestI)){
                greatestI = currentMsg[i].id;
                var msgI = i;
                if(currentMsg[i].sender==="kristof"){
                    document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+currentMsg[msgI].msg+"</div></div>";
                }
                else{
                    document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+currentMsg[msgI].msg+"</div></div>";
                }
            }*/
        }
        for(let i = 0; i<msgs.length; i++){
            //console.log(msgs);
            console.log(parseInt(msgs[i].id))
            console.log(parseInt(greatestI))
            console.log(parseInt(msgs[i].id)>parseInt(greatestI))
            if(parseInt(msgs[i].id)>parseInt(greatestI)){
                greatestI = msgs[i].id;
                var msgI = i;
                if(msgs[msgI].sender==="kristof"){
                    //if(msgs[msgI].timeHour===msgs[msgI-1].timeHour && msgs[msgI-1].timeMinute-msgs[msgI].timeMinute>=10){
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv'>"+msgs[msgI].msg+"</div></div>";
                    //}
                    //else{
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        //document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                    //}                
                }
                else{
                    //if(msgs[msgI].timeHour===msgs[msgI-1].timeHour && msgs[msgI-1].timeMinute-msgs[msgI].timeMinute>=10){
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        //document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"' style='margin-top:15px'>"+msgs[msgI].msg+"</div></div>";
                    //}
                    //else{
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+msgs[msgI].msg+"</div></div>";
                    //}
                }
            }
            else{
                document.title="Üzimüzi";
            }
        }
    }
    xmlhttp.open("GET", "fetcher1.php");
    xmlhttp.send();
    document.getElementById("msgTableId").scrollTop = document.getElementById("msgTableId").scrollHeight;
}
function insert(){
    const input = document.getElementById("msgTableInput").value;
    const params = "msg="+input;
    console.log(input);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    }
    xmlhttp.open('POST', 'inserterkristof.php');
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);
    document.getElementById("msgTableInput").value="";
}