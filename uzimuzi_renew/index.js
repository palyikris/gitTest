window.onload=function(){
    document.getElementById("scrollId").scrollTop = document.getElementById("scrollId").scrollHeight
}
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
            if(parseInt(msgs[i].id)>parseInt(greatestI)){
                greatestI = msgs[i].id;
                var msgI = i;
                /*console.log(document.getElementById("scrollId").scrollHeight - Math.abs(document.getElementById("scrollId").scrollTop) === document.getElementById("scrollId").clientHeight);
                console.log(document.getElementById("scrollId").scrollHeight);
                console.log(document.getElementById("scrollId").scrollTop);
                console.log(document.getElementById("scrollId").clientHeight);
                console.log(document.getElementById("scrollId").scrollHeight - document.getElementById("scrollId").clientHeight)*/
                if(document.getElementById("scrollId").scrollHeight - Math.round(document.getElementById("scrollId").scrollTop) === document.getElementById("scrollId").clientHeight){ //if user is at the bottom of message displayer
                    if(msgs[msgI].sender==="kristof"){
                        if(msgI === 0){
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI].timeHour;
                            let prevTimeMinute = msgs[msgI].timeMinute;
                            //console.log(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5, msgs[msgI].msg, prevTimeMinute, thisTimeMinute);
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        else{
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI-1].timeHour
                            let prevTimeMinute = msgs[msgI-1].timeMinute;
                            //console.log(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5, msgs[msgI].msg, prevTimeHour, thisTimeHour, prevTimeMinute, thisTimeMinute, prevTimeMinute-thisTimeMinute, msgs[msgI].id);
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        
                        //else{
                            //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                            //document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                        //}      
                    }
                    else{
                        if(msgI === 0){
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI].timeHour;
                            let prevTimeMinute = msgs[msgI].timeMinute;
                            console.log(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5);
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        else{
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI-1].timeHour
                            let prevTimeMinute = msgs[msgI-1].timeMinute;
                            console.log(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5);
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        
                        //else{
                            //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                            //document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                        //}        
                        document.title="Új üzenet";                  
                    }
                    //console.log(document.getElementById("scrollId").scrollTop = document.getElementById("scrollId").clientHeight)
                    document.getElementById("scrollId").scrollTop = document.getElementById("scrollId").scrollHeight - document.getElementById("scrollId").clientHeight;
                    document.getElementById("scrollId").scrollTop = Math.round(document.getElementById("scrollId").scrollTop);
                }
                else{
                    if(msgs[msgI].sender==="kristof"){
                        if(msgI === 0){
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI].timeHour;
                            let prevTimeMinute = msgs[msgI].timeMinute;
                            
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        else{
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI-1].timeHour
                            let prevTimeMinute = msgs[msgI-1].timeMinute;
                            
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        
                        //else{
                            //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                            //document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                        //}                
                    }
                    else{
                        if(msgI === 0){
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI].timeHour;
                            let prevTimeMinute = msgs[msgI].timeMinute;
                            console.log(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5);
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        else{
                            let thisTimeHour = msgs[msgI].timeHour;
                            let thisTimeMinute = msgs[msgI].timeMinute;
                            let prevTimeHour = msgs[msgI-1].timeHour
                            let prevTimeMinute = msgs[msgI-1].timeMinute;
                            console.log(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5);
                            if(prevTimeHour === thisTimeHour && thisTimeMinute - prevTimeMinute >= 5){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft' style='margin-top:10px;'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                                console.log("ja");
                            }
                            else if(prevTimeHour != thisTimeHour){
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='timeDisplayer'>"+thisTimeHour+":"+thisTimeMinute+", "+msgs[msgI].dateMonAndYear+"</div>"
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                            else{
                                let currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                                document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                            }
                        }
                        
                        //else{
                            //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                            //document.getElementById("msgTableId").innerHTML+="<div class='msgRight'><div class='msgDiv' title='"+currTime+"'>"+msgs[msgI].msg+"</div></div>";
                        //}  
                        document.title="Új üzenet";                        
                    }
                    //console.log(document.getElementById("scrollId").scrollTop = document.getElementById("scrollId").clientHeight)
                    document.getElementById("scrollId").scrollTop = document.getElementById("scrollId").scrollHeight - document.getElementById("scrollId").clientHeight;
                    document.getElementById("scrollId").scrollTop = Math.round(document.getElementById("scrollId").scrollTop);
                }
            }
            else{
                document.title="Üzimüzi";
            }
        }
    }
    xmlhttp.open("GET", "fetcher.php");
    xmlhttp.send();
}, 1000);

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
        "sentTo" : "kristof",
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
                        //document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv' title='"+currTime+"' style='margin-top:10px'>"+msgs[msgI].msg+"</div></div>";
                    //}
                    //else{
                        //const currTime = msgs[msgI].timeHour+":"+msgs[msgI].timeMinute;
                        document.getElementById("msgTableId").innerHTML+="<div class='msgLeft'><div class='msgDiv'>"+msgs[msgI].msg+"</div></div>";
                    //}
                }
                document.title="Új üzenet";
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
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    }
    xmlhttp.open('POST', 'inserterkristof.php');
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(params);
    document.getElementById("msgTableInput").value="";
}