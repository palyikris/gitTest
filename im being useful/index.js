window.onload = (event) => {
    const initialInvisible = document.querySelectorAll(".topPart, .mainWrapper");
    console.log(initialInvisible)
        for(let i = 0;i < initialInvisible.length; i++){
            initialInvisible[i].style.display="none";
        }
}
let subject, userName, password;
function submitLogin(){
    subject = document.getElementById("subjectInput").value;
    userName = document.getElementById("userNameInput").value;
    password = document.getElementById("passwordInput").value;
    if(userName === "Kristóf" && password === "6969"){
        subject = document.getElementById("subjectInput").value;
        userName = document.getElementById("userNameInput").value;
        password = document.getElementById("passwordInput").value;
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            console.log("huh")
            const notes = JSON.parse(this.responseText);
            if(notes.length === 0){
                
            }
            else{
                console.log(notes)
                document.getElementById("main").innerHTML=notes[0].noteContent;
            }
        }
        console.log(subject)
        let param = "subject="+subject;
        xmlhttp.open("POST", "notes.php");
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(param);
    }
    document.getElementById("loginWrapper").style.display="none";
    const initialInvisible = document.querySelectorAll(".topPart, .mainWrapper");
        for(let i = 0;i < initialInvisible.length; i++){
            initialInvisible[i].style.display="";
        }
    document.title=capitalizeFirstLetter(subject)+" jegyzet"
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
    input = input.split(" ");
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
function imBored(){
    document.getElementById("inputWrapper").style.display="none";
    document.getElementById("toolsReadyWrapper").style.display="none";
    document.getElementById("nOfWords").style.display="none";
    document.getElementById("imBoredDiv").style.display="flex";
}
function showGames(){
    document.getElementById("showGames").style.display="flex";
    document.getElementById("inputWrapper").style.display="none";
    document.getElementById("toolsReadyWrapper").style.display="none";
    document.getElementById("nOfWords").style.display="none";
    document.getElementById("imBoredDiv").style.display="none";
}
function hideGames(){
    document.getElementById("showGames").style.display="none";
    document.getElementById("inputWrapper").style.display="none";
    document.getElementById("toolsReadyWrapper").style.display="none";
    document.getElementById("nOfWords").style.display="none";
    document.getElementById("imBoredDiv").style.display="flex";
}
function imCurious(){
    document.getElementById("showGames").style.display="none";
    document.getElementById("inputWrapper").style.display="flex";
    document.getElementById("toolsReadyWrapper").style.display="none";
    document.getElementById("nOfWords").style.display="none";
    document.getElementById("imBoredDiv").style.display="none";
}

function saveContent(){
    const note = document.getElementById("main").value;
    console.log(note);
    const subjectToSend = subject;
    let param = "content="+note+"&subject="+subjectToSend;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
    }
    xmlhttp.open('POST', 'index.php');
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(param);
    document.getElementById("savedBool").innerHTML = "Mentve..."
}
var selectedText = '';
setInterval(() => {
    // window.getSelection
    if (window.getSelection) {
        selectedText = window.getSelection();
    }
    // document.getSelection
    else if (document.getSelection) {
        selectedText = document.getSelection();
    }
    // document.selection
    else if (document.selection) {
        selectedText = 
        document.selection.createRange().text;
    } else return;
    console.log(selectedText)
}, 2000);
function adjustFontWeight(){
    const input = document.getElementById("fontWeightInput").value;
}
setInterval(() => {
    let left = document.getElementById("block").style.left;
}, 1000);
const character = document.getElementById("character");
const block = document.getElementById("block");
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },400);
}
document.addEventListener('keydown', (event) => {
    jump();
  }, false);
let checkDead = setInterval(() => {
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    
    if(blockLeft <40 && blockLeft > 0 && characterTop >=360){
        document.getElementById("uLost").innerHTML = "Fel a csőrrel, és próbáld újra!"
        block.style.animationName="none";
        block.style.opacity="0";
        console.log(blockLeft < 20, blockLeft)
        console.log(blockLeft > 0, blockLeft)
        console.log(characterTop >=320, characterTop)
    }
}, 20);
function again(){
    document.getElementById("uLost").innerHTML = "KACSAAAAAAAA!!!"
    block.style.animationName="block";
    block.style.opacity="1";
}
function trexGame(){
    console.log("ja");
    document.getElementById("trexGameWrapper").style.display="flex";
    document.getElementById("trexGameWrapper").style.position="absolute";
    document.getElementById("trexGameWrapper").style.top="0";
    document.getElementById("trexGameWrapper").style.zIndex="10";
    document.getElementById("trexGameWrapper").style.width="100%";
    document.getElementById("trexGameWrapper").style.height="100%";
    document.getElementById("mainWrapper").style.display="none";
    document.getElementById("topPart").style.display="none";

}
function trexGameClose(){
    document.getElementById("trexGameWrapper").style.display="none";
    document.getElementById("trexGameWrapper").style.position="absolute";
    document.getElementById("trexGameWrapper").style.zIndex="10";
    document.getElementById("trexGameWrapper").style.width="100%";
    document.getElementById("trexGameWrapper").style.height="100%";
    document.getElementById("mainWrapper").style.display="flex";
    document.getElementById("topPart").style.display="";
}
function passwordVisible(){
    if(document.getElementById("seeOrNot").checked == 1){
        document.getElementById("passwordInput").type="text";
    }
    else{
        document.getElementById("passwordInput").type="password";
    }
}

