
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
function darkMode(){
    console.log(document.body.style.backgroundColor)
    console.log(document.body.style.backgroundColor === "rgb(46, 44, 44)")
    if(document.body.style.backgroundColor === "rgb(46, 44, 44)"){
        document.body.style.backgroundColor="rgb(248, 244, 244)";
        document.getElementById("main").style.backgroundColor="white";
        const darkModeVars = document.querySelectorAll("button, label");
        console.log(darkModeVars);
        for(let i = 0; i<darkModeVars.length; i++){
            console.log(darkModeVars[i].className === "addMainButton")
            if(darkModeVars[i].className === "addMainButton"){
                console.log(i)
                darkModeVars[i].style.color="#02c2f2";
            }
            else{
                darkModeVars[i].style.color="white";
            }
        }
        document.getElementById(main).style.boxShadow="1px 1px lightgrey;";
    }
    else{
        document.body.style.backgroundColor="#2e2c2c";
        document.getElementById("main").style.backgroundColor="#544f4f";
        const darkModeVars = document.querySelectorAll("button, label");
        console.log(darkModeVars);
        for(let i = 0; i<darkModeVars.length; i++){
            if(darkModeVars[i].className === "addMainButton"){
                console.log(i)
                darkModeVars[i].style.color="#02c2f2";
            }
            else{
                darkModeVars[i].style.color="#3d4d4d";
            }
        }
        document.getElementById(main).style.boxShadow="none";
    }
}
setInterval(() => {
    let nOfChars = 0;
    let nOfWords = 0;
    let input = document.getElementById("main").value;
    for(let i = 0; i < input.length; i++){
        if(input[i] === ""){

        }
        else{
            nOfChars++;
        }
    }
    console.log(nOfChars)
    input = input.split(" ");
    console.log(input);
    for(let i = 0; i < input.length; i++){
        nOfWords++;
    }
    nOfWords = nOfWords-1;
    document.getElementById("nOfWords").innerHTML="Szavak száma: "+nOfWords+", és a karakterek száma: "+nOfChars+".";
}, 1000);
function countWords(){
    document.getElementById("inputWrapper").style.display="none";
    document.getElementById("toolsReadyWrapper").style.display="none";
    document.getElementById("nOfWords").style.display="block";
}
function noCountWords(){
    document.getElementById("inputWrapper").style.display="flex";
    document.getElementById("toolsReadyWrapper").style.display="none";
    document.getElementById("nOfWords").style.display="none";
}