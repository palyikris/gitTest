function toolsVisible(){
    document.getElementById('toolsReadyWrapper').style.display="flex";
    document.getElementById('toolsReady').style.display="flex";
    document.getElementById('toolsReadyOther').style.display="none";
    document.getElementById('inputWrapper').style.display="none";
}
function moreTools(){
    if(document.getElementById('toolsReadyOther').style.display==='none'){
        document.getElementById('toolsReadyOther').style.display='flex';
        document.getElementById('inputWrapper').style.display='none';
        document.getElementById('moreToolsButton').innerHTML='vissza...'
    }
    else{
        document.getElementById('toolsReadyOther').style.display='none';
        document.getElementById('inputWrapper').style.display='none';
        document.getElementById('moreToolsButton').innerHTML='Többi...'
    }
}
function toolsnotReady(){
    document.getElementById('toolsReady').style.display='none';
    document.getElementById('toolsReadyOther').style.display='none';
    document.getElementById('inputWrapper').style.display='flex';
}