

function plusZero(j){
    if(j<10){
        j="0"+j;
    }
    return j
}
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
const classStart = JSON.parse(this.responseText);
const now = new Date();
for(let k=0; k<classStart.length; k++){
    classStart[k].classSt = classStart[k].classSt.split(".");
    const then = new Date();
    then.setHours(classStart[k].classSt[0], classStart[k].classSt[1]);
    if(now<then){
        const diff = (then-now)/60000;
        document.getElementById("nextStudentTime").innerHTML="A következő óráig "+diff+" perc van hátra;";
        document.getElementById("nextStudent").innerHTML="A diák akivel az óra lesz: "+classStart[k].studentName;
    }
    if(now.getTime()===then.getTime()){
        document.getElementById("randomDiv").innerHTML="A következő óra éppen most kezdődik.";
    }
    if(now>then){
        if(k===classStart.length){
            document.getElementById("randomDiv").innerHTML="A mai napra már nincs több óra.";
        }
    }
}
}
xmlhttp.open("GET", "classStart.php");
xmlhttp.send();