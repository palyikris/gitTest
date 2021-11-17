/*window.onload = (event) => {
    const initialInvisible = document.querySelectorAll(".topPart, .mainWrapper, .jokes");
        for(let i = 0;i < initialInvisible.length; i++){
            initialInvisible[i].style.display="none";
        }
}
let subject, userName, password;
function submitLogin(){
    subject = document.getElementById("subjectInput").value;
    userName = document.getElementById("userNameInput").value;
    password = document.getElementById("passwordInput").value;
    console.log("Login successful!")
    if(userName === "Kristóf" && password === "6969"){
        subject = document.getElementById("subjectInput").value;
        userName = document.getElementById("userNameInput").value;
        password = document.getElementById("passwordInput").value;
        console.log(subject)
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            const notes = JSON.parse(this.responseText);
            console.log(notes, notes.length === 0)
            if(notes.length === 0){
                
            }
            else{
                console.log(notes[0], notes[0].noteContent)
                document.getElementById("main").value=notes[0].noteContent;
                console.log(document.getElementById("main").innerHTML)
            }
        }
        let param = "subject="+subject;
        xmlhttp.open("POST", "notes.php");
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(param);
    }
    document.getElementById("loginWrapper").style.display="none";
    const initialInvisible = document.querySelectorAll(".topPart, .mainWrapper, .jokes");
        for(let i = 0;i < initialInvisible.length; i++){
            initialInvisible[i].style.display="";
        }
    document.title=capitalizeFirstLetter(subject)+" jegyzet"
}*/
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
    if(document.body.style.backgroundColor === "rgb(46, 44, 44)"){
        document.body.style.backgroundColor="rgb(248, 244, 244)";
        document.getElementById("main").style.backgroundColor="white";
        const darkModeVars = document.querySelectorAll("button, label");
        for(let i = 0; i<darkModeVars.length; i++){
            if(darkModeVars[i].className === "addMainButton"){
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
        for(let i = 0; i<darkModeVars.length; i++){
            if(darkModeVars[i].className === "addMainButton"){
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
       
    }
}, 20);
function again(){
    document.getElementById("uLost").innerHTML = "KACSAAAAAAAA!!!"
    block.style.animationName="block";
    block.style.opacity="1";
}
function trexGame(){
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
function messages(){
    if(document.getElementById("messageFrame").style.display === "" || document.getElementById("messageFrame").style.display === "none"){
        document.getElementById("messageFrame").style.display = "flex";
    }
    else{
        document.getElementById("messageFrame").style.display = "none";
    }
}

setInterval(() => {
    let text = document.getElementById("main").value;
    text = text.split(" ");
    for(let i = 0; i < text.length; i++){
        if(text[i].includes("<") === true){
            if(text[i].includes("<b>") === true && text[i].includes("</b>") === true){
                let textChanging = text[i].replace("<b>", "")
                textChanging = textChanging.replace("</b>", "")
                textChanging = "<span style='font-weight:'bold''>"+textChanging+"</span>"
                text[i] = textChanging
            }
        }
    }
    
    document.getElementById("main").value = text.join(" ")
}, 1500);
let weekdays = 

    [
        [
            {
                "id" : "1",
                "start" : "07.30",
                "end" : "08.00",
                "subject" : "spanyol",
                "classRoom" : "105"
            },
            {
                "id" : "2",
                "start" : "08.00",
                "end" : "08.45",
                "subject" : "osztályfőnöki",
                "classRoom" : "111"
            },
            {
                "id" : "3",
                "start" : "09.00",
                "end" : "09.45",
                "subject" : "testnevelés",
                "classRoom" : "Tesiterem"
            },
            {
                "id" : "4",
                "start" : "10.00",
                "end" : "11.30",
                "subject" : "angol",
                "classRoom" : "209"
            },
            {
                "id" : "5",
                "start" : "12.00",
                "end" : "12.45",
                "subject" : "történelem",
                "classRoom" : "111"
            },
            {
                "id" : "6",
                "start" : "13.00",
                "end" : "13.45",
                "subject" : "nyelvtan",
                "classRoom" : "14"
            },
            {
                "id" : "7",
                "start" : "14.00",
                "end" : "15.30",
                "subject" : "Matematika",
                "classRoom" : "111"
            }

        ],
        [
            {
                "id" : "1",
                "start" : "07.15",
                "end" : "08.30",
                "subject" : "angol",
                "classRoom" : "207"
            },
            {
                "id" : "2",
                "start" : "09.00",
                "end" : "09.45",
                "subject" : "Matematika",
                "classRoom" : "123"
            },
            {
                "id" : "3",
                "start" : "10.00",
                "end" : "11.30",
                "subject" : "spanyol",
                "classRoom" : "118"
            },
            {
                "id" : "4",
                "start" : "12.00",
                "end" : "12.45",
                "subject" : "történelem",
                "classRoom" : "111"
            },
            {
                "id" : "5",
                "start" : "13.00",
                "end" : "13.45",
                "subject" : "aciv",
                "classRoom" : "225"
            },
            {
                "id" : "6",
                "start" : "15.00",
                "end" : "16.30",
                "subject" : "informatika",
                "classRoom" : "Informatika terem"
            }
        ],
        [
            {
                "id" : "1",
                "start" : "07.15",
                "end" : "08.45",
                "subject" : "matematika",
                "classRoom" : "116"
            },
            {
                "id" : "2",
                "start" : "09.00",
                "end" : "09.45",
                "subject" : "történelem",
                "classRoom" : "106"
            },
            {
                "id" : "3",
                "start" : "10.00",
                "end" : "10.45",
                "subject" : "fizika",
                "classRoom" : "39"
            },
            {
                "id" : "4",
                "start" : "11.00",
                "end" : "12.30",
                "subject" : "irodalom",
                "classRoom" : "111"
            },
            {
                "id" : "5",
                "start" : "13.00",
                "end" : "13.45",
                "subject" : "aciv",
                "classRoom" : "111"
            }
        ],
        [
            {
                "id" : "1",
                "start" : "07.15",
                "end" : "08.45",
                "subject" : "Rajz/Ének",
                "classRoom" : "212/211"
            },
            {
                "id" : "2",
                "start" : "09.00",
                "end" : "09.45",
                "subject" : "fizika",
                "classRoom" : "111"
            },
            {
                "id" : "3",
                "start" : "10.00",
                "end" : "10.45",
                "subject" : "testnevelés",
                "classRoom" : "Tesi terem"
            },
            {
                "id" : "4",
                "start" : "11.00",
                "end" : "11.45",
                "subject" : "matematika",
                "classRoom" : "42"
            },
            {
                "id" : "5",
                "start" : "12.00",
                "end" : "12.45",
                "subject" : "irodalom",
                "classRoom" : "57"
            },
            {
                "id" : "6",
                "start" : "13.00",
                "end" : "13.45",
                "subject" : "biológia",
                "classRoom" : "47"
            },
            {
                "id" : "7",
                "start" : "14.00",
                "end" : "15.30",
                "subject" : "spanyol",
                "classRoom" : "118"
            }

        ],
        [
            {
                "id" : "1",
                "start" : "09.00",
                "end" : "09.45",
                "subject" : "történelem",
                "classRoom" : "106"
            },
            {
                "id" : "2",
                "start" : "10.00",
                "end" : "10.45",
                "subject" : "testnevelés",
                "classRoom" : "Tesi terem"
            },
            {
                "id" : "3",
                "start" : "11.00",
                "end" : "11.45",
                "subject" : "spanyol",
                "classRoom" : "111"
            },
            {
                "id" : "4",
                "start" : "12.00",
                "end" : "12.45",
                "subject" : "biológia",
                "classRoom" : "49"
            },
            {
                "id" : "5",
                "start" : "13.00",
                "end" : "13.45",
                "subject" : "etika",
                "classRoom" : "111"
            }
        ]

    ];
function addZero(min){

}
function renderClasses(){
    let day = new Date().getDay();
    document.getElementById("inputWrapper").style.display="none";
    document.getElementById("classesDiv").style.display="flex";
    console.log(day>=1 && day<=5, day)
    if(day>=1 && day<=5){
        day = parseInt(day-1)
        currDay = weekdays[day];
        let hour = new Date().getHours()
        let minute = new Date().getMinutes()
        console.log(hour, minute)
        for(let i = 0; i < currDay.length; i++){
            let classesToday = []
            classesToday.push(currDay[i])
            console.log(currDay[i])
            console.log(todaysClasses)
            console.log(i, todaysClasses[i])
            let thisClass = document.createElement("div");
            thisClass.setAttribute("class", "thisClass")
            thisClass.innerHTML = currDay[i].subject+" óra lesz. Kezdete: "+currDay[i].start+", vége: "+currDay[i].end+", terem: "+currDay[i].classRoom;
            console.log(thisClass)
            document.getElementById("todaysClasses").appendChild(thisClass);
            let start = currDay[i].start;
            start = start.split(".");
            let end = currDay[i].end;
            end = end.split(".");
            console.log(start, end)
            console.log(parseInt(start[0]) <= hour && parseInt(end[1]) < minute, start[0], end[0], hour, currDay[i].subject)
            console.log(parseInt(end[0]) < hour || parseInt(end[0]) === hour && parseInt(end[1]) < hour, hour, minute, start[0], end[0], end[1])
            if(parseInt(end[0]) < hour || parseInt(end[0]) === hour && parseInt(end[1]) < minute){
                console.log("bam")
                console.log(i === currDay.length-1, i, currDay.length-1)
                    if(i === currDay.length-1){
                        console.log("Ma már nincs több órád!");
                        document.getElementById("classesDiv").innerHTML="<div id='noClass'>Ma már nincs több órád!</div>"
                }
            }
            else{
                console.log(parseInt(start[0]) === hour && parseInt(start[1]) <= minute && start[0] != end[0] || parseInt(start[0])+1 === hour && parseInt(end[0]) === hour && parseInt(end[1]) <= minute, i, currDay[i].subject, start[0])
                console.log(parseInt(start[0])+1 === hour && parseInt(end[0]) === hour && parseInt(end[1]) <= minute, start[0], end[0], end[1], hour, minute)
                console.log(parseInt(start[0])+1 === hour, start[0], hour, parseInt(end[0]) === hour, end[0], hour, parseInt(end[1]) >= minute, end[1], minute)
                if(parseInt(start[0]) === hour && parseInt(start[1]) <= minute && start[0] != end[0] || parseInt(start[0])+1 === hour && parseInt(end[0]) === hour && parseInt(end[1]) >= minute){
                    console.log("Jelenglegi óra: "+currDay[i].subject, currDay, i)
                    document.getElementById("currClass").innerHTML = "Jelenlegi óra: "+currDay[i].subject.toUpperCase()
                    console.log(start[0] != end[0])
                    if(start[0] != end[0]){
                        let growthByMin = 40 / 90
                        if(start[0] === end[0]){
                            let bgLoaded = growthByMin * minute
                            console.log("huhu", bgLoaded)
                            document.getElementById("currClass").style.backgroundImage = "linear-gradient(90deg, #02c2f2, #02c2f2 "+bgLoaded+"vmin,transparent 0)"
                        }
                        else{
                            let bgLoaded = growthByMin * (60 + minute)
                            console.log("hehe", bgLoaded)
                            document.getElementById("currClass").style.backgroundImage = "linear-gradient(90deg, #02c2f2, #02c2f2 "+bgLoaded+"vmintransparent 0)"
                        }
                    }
                    else{
                        let growthByMin = 40 / 45
                        let bgLoaded = growthByMin * minute
                        console.log("haha", bgLoaded)
                        document.getElementById("currClass").style.backgroundImage = "linear-gradient(90deg, #02c2f2, #02c2f2 "+bgLoaded+"vmin,transparent 0)"

                    }
                    if(i != 0){
                        document.getElementById("prevClass").innerHTML = "Előző óra: "+currDay[i-1].subject.toUpperCase()+" volt, a "+currDay[i].classRoom+" teremben."
                    }
                    else{
                        document.getElementById("prevClass").innerHTML = "Ez az első órád!"
                    }
                    if(i < currDay.length-1){
                        document.getElementById("nextClass").innerHTML = "Következő óra: "+currDay[i+1].subject.toUpperCase()+", a "+currDay[i].classRoom+" teremben."
                    }
                    else{
                        document.getElementById("nextClass").innerHTML = "Ezután mehetsz hazaaa!!!"
                    }
                }
                else{
                    document.getElementById("classesDiv").innerHTML = "<div id='noClass1'>Most épp nincs óra!</div>"
                }
            }
        }
    }
    else{
        document.getElementById("classesDiv").innerHTML = "Ma nincsen sulika. Lazíts!!"
    }
};
function closeClasses(){
    document.getElementById("inputWrapper").style.display="flex";
    document.getElementById("classesDiv").style.display="none";
    document.getElementById("todaysClasses").innerHTML="";
}