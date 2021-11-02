let wordLimit = 0;
function setWordLimit(){
    console.log(document.getElementById("limitInput").value)
    if(document.getElementById("limitInput").value === ""){
        //alert("Nem adtál meg szólimitet!")
        document.getElementById("limitInput").value="Nem adtál meg szólimitet!"
    }
    else{
        wordLimit = parseInt(document.getElementById("limitInput").value);
        console.log("WordLimit changed!")
        document.getElementById("limitInput").style.animationName="";
        document.getElementById("limitInput").style.border="2.5px solid #66ced1";
        document.getElementById("textHolderInput").innerHTML="";
        document.getElementById("textHolderInput").style.color="black";
        document.getElementById("textHolderInput").style.textTransform="none"
        document.getElementById("limitInput").value="";
        document.getElementById("limitInput").placeholder="500 szó";
    }
}
var input = document.querySelector('#textHolderInput'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
function wordCount(){
    
}
var inputOther = document.querySelector('#limitInput'); // get the input element
inputOther.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(inputOther); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
function wordCount(){
    
}
setInterval(() => {
    if(wordLimit > 0){
        let nOfWords = 0;
        let input = document.getElementById("textHolderInput").value;
        input = input.split(" ");
        console.log(input);
        for(let i = 0; i < input.length; i++){
            nOfWords++;
        }
        nOfWords = nOfWords-1;
        let wordsToGo = 0;
        if(nOfWords>=wordLimit){
            wordsToGo=nOfWords-wordLimit;
        }
        else{
            wordsToGo = wordLimit - nOfWords;
        }
        if(nOfWords >= wordLimit){
            document.getElementById("nOfWords").innerHTML=nOfWords+" szavas a fogalmazásod. Gratula! "+wordsToGo+" szóval túl vagy a megadott határon!"
        }
        else{
            if(wordLimit / 2 < nOfWords){
                document.getElementById("nOfWords").innerHTML=nOfWords+" szavas a fogalmazásod. Csicska szar vagy, de fej a fellel! "+wordsToGo+" szó még hátra van."
            }
            else{
                document.getElementById("nOfWords").innerHTML=nOfWords+" szavas a fogalmazásod. Csicska geci, még a fele sincs meg! "+wordsToGo+" szó még hátra van."
            }
        }
    }
}, 1000);
function wlCheck(){
    if(wordLimit <= 0){
        document.getElementById("textHolderInput").innerHTML="Először állíts be szólimitet, aztán írj bele!";
        document.getElementById("textHolderInput").style.color="red";
        document.getElementById("textHolderInput").style.textTransform="uppercase"
        document.getElementById("limitInput").style.border="2px solid red";
        document.getElementById("limitInput").style.animationName="villog";
        document.getElementById("limitInput").style.animationTimingFunction="linear";
        document.getElementById("limitInput").style.animationIterationCount="infinite";
        document.getElementById("limitInput").style.animationFillMode="both";
        document.getElementById("limitInput").style.animationDuration="1s";
        window.location.href="file:///C:/Users/palyi/Desktop/gittest/wordcounter/index.html#limitInput"
        
    }
    else{
        document.getElementById("limitInput").style.animationName="";
        document.getElementById("limitInput").style.border="2.5px solid #66ced1";
    }
}
function checkNeeds(element){
    wordLimit = 0;
    if(element.innerHTML === "Motivációt"){
        const uCanDoIt = ["Gyerünk haver, nincs sok hátra!", "Nagyon jó vagy, most már nem adhatod fel!", "El se hiszed milyen közel vagy a megoldáshoz!", "Isten vagy, ez is menni fog!"]
        let randomNum = Math.floor(Math.random()*4);
        console.log(randomNum)
        document.getElementById("nOfWords").innerHTML=uCanDoIt[randomNum];
    }
    else if(element.innerHTML === "Segítséget"){
        document.getElementById("nOfWords").innerHTML="A nemzeti öngyilkosság prevenciós forróvonal száma: 06-70-934-1051"
    }
    else if(element.innerHTML === "Beszólást"){
        const uCanDoIt = ["Úgyse megy te darab szar, hagyd abba!", "Még mindig itt vagy bazmeg? Húzz már vissza anyádba!!", "Na mivan, rájöttél, hogy geci buta vagy? Legalább erre sikerült xd", "Csicska szar."]
        let randomNum = Math.floor(Math.random()*4);
        console.log(randomNum)
        document.getElementById("nOfWords").innerHTML=uCanDoIt[randomNum];
    }
    else if(element.innerHTML === "Ötleteket"){
        document.getElementById("nOfWords").innerHTML="<input type='text' id='ideaInput' placeholder='Ide írd, hogy melyik tantárggyal szenvedsz...'><button type='button' id='ideaButton' onclick='ideaCheck()'>OK</button>";
    }
}
function ideaCheck(){
    let ideaInput = document.getElementById("ideaInput").value.toLowerCase();
    console.log(ideaInput);
    console.log(ideaInput === "magyar")
    if(ideaInput === "magyar"){
        const guesses = ["Keress rá az alkotó többi művére és vonj párhuzamot!", "Kérj segítséget egy barátodtól, akár össze is ülhettek megcsinálni!", "Keress a műben szimbólumokat és nézd meg, mit jelképeznek!", "Keress rá a mű elemzésére, és meríts onnan ihletet!", "Minden egyes kifejezést nyújts el úgy, ahogy csak tudod!"]
        console.log(guesses.length)
        let randomNum = Math.floor(Math.random()*5);
        document.getElementById("nOfWords").innerHTML=guesses[randomNum];
    }
    else if(ideaInput === "matek" || ideaInput === "matematika"){
        const guesses = ["Mindig próbálj egy azonosságra rátalálni!", "Kérj segítséget egy barátodtól, akár össze is ülhettek megcsinálni!", "Gondold át a meneted lépésről, lépésre, hogy mi logikus, mi nem, aztán ellenőrizz, és ha kell, korrigálj", "Nyugodtan keress rá neten a megoldásra, vagy mégjobb, használj PhotoMath-t!", "Ha azzal a módszerrel nem megy, amivel csinálod, próbálj meg egy másikat! Szinte mindig van másik!"]
        console.log(guesses.length)
        let randomNum = Math.floor(Math.random()*5);
        document.getElementById("nOfWords").innerHTML=guesses[randomNum];
    }
    else if(ideaInput === "töri" || ideaInput === "történelem"){
        const guesses = ["Sajnos itt csak a tanulás segít. Sok szerencsét!", "Keress rá az adott témád idejére, előzményeire, illetve az őáltatla keltett hatásokra!", "Csináld együtt a barátaiddal, hátha tudnak segíteni!", "Nézd át még egyszer a lapokat, amiket kaptál és a jegyzeteidet, hátha még valamit ki tudsz belőlük venni!", "Minden egyes kifejezést nyújts el úgy, ahogy csak tudod!"]
        console.log(guesses.length)
        let randomNum = Math.floor(Math.random()*5);
        document.getElementById("nOfWords").innerHTML=guesses[randomNum];
    }
    else if(ideaInput === "biosz" || ideaInput === "biológia"){
        document.getElementById("nOfWords").innerHTML="Ejj, részvétem, ezt szimplán be kell vágni."
    }
    else{
        document.getElementById("nOfWords").innerHTML="Sorryka, erre a tantárgyra még nincs ötlet megcsinálva, de ha te szeretnéd, és vannak ötleteid is, írj a <b>palyi.kristof@gmail.com</b>-ra, és rögvest orvosoljuk a problémát"
    }
}
function cancelNotification(){
    document.getElementById("notificationSpan").style.display="none";
    document.getElementById("notificationButton").style.display="none";
}
const intervalCancelNotification = setInterval(() => {
    console.log("aha");
    let nOfWords = 0;
    let input = document.getElementById("textHolderInput").value;
    input = input.split(" ");
    console.log(input);
    for(let i = 0; i < input.length; i++){
        nOfWords++;
    }
    nOfWords = nOfWords-1;
    console.log(nOfWords)
    console.log(wordLimit)
    console.log(nOfWords>wordLimit)
    if(nOfWords>wordLimit){
        console.log("aha");
        document.getElementById("nOfWords").innerHTML+="<span id='notificationSpan' style='color:red;text-transform:uppercase;text-align:center;'><br>Most már megállhatsz, ha szeretnél, megvan a limit!</span>"
        clearInterval(intervalCancelNotification)
    } 
}, 1000);