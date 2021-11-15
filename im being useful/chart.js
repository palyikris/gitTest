let recordJoke = 0;
let secondJoke = 0;
let thirdJoke = 0;
setInterval(() => {
    const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            let jokes = JSON.parse(this.responseText);
            let d = new Date()
            let day = d.getDate()
            let month = d.getMonth()+1
            let year = d.getFullYear()
            let nOfJokes = []
            let mOfJokes = []
            let kOfJokes = []
            let zOfJokes = []
            let date = day+"/"+month+"/"+year
            let currDate = "";
            let currDate1 = "";
            let currDate2 = "";
            let currDate3 = "";
            for(let i = 0; i < jokes.length; i++){
                if(i === 0){
                    nOfJokes.push(jokes[i])
                    currDate = jokes[i].dateOf
                }
                else{
                    if(jokes[i].dateOf === currDate){
                        nOfJokes.push(jokes[i])
                    }
                    else if(jokes[i].dateOf != currDate){
                        if(currDate1 == ""){
                            currDate1 = jokes[i].dateOf 
                            mOfJokes.push(jokes[i])
                        }
                        else{
                            if(jokes[i].dateOf === currDate1){
                                mOfJokes.push(jokes[i])
                            }
                            else{
                                if(currDate2 === ""){
                                    currDate2 = jokes[i].dateOf
                                    kOfJokes.push(jokes[i])
                                }
                                else{
                                    if(currDate2 === jokes[i].dateOf){
                                        kOfJokes.push(jokes[i])
                                    }
                                    else{
                                        if(currDate3 === ""){
                                            currDate3 = jokes[i].dateOf
                                            zOfJokes.push(jokes[i])
                                        }
                                        else{
                                            if(jokes[i].dateOf === currDate3){
                                                zOfJokes.push(jokes[i])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            let date1, date2, date3, date4;
            if(nOfJokes.length != 0){
                date1 = nOfJokes[0].dateOf
            }
            else{
                date1 = "Nincs adat"
            }
            if(mOfJokes != 0){
                date2 = mOfJokes[0].dateOf
            }
            else{
                date2 = "Nincs adat"
            }
            if(kOfJokes.length != 0){
                date3 = kOfJokes[0].dateOf
            }
            else{
                date3 = "Nincs adat"
            }
            if(zOfJokes != 0){
                date4 = zOfJokes[0].dateOf

            }
            else{
                date4 = "Nincs adat"
            }
            let weekAverage = (zOfJokes.length + kOfJokes.length) / 2
            let weekAverage1 =(mOfJokes.length + nOfJokes.length) / 2
            let weeks = [zOfJokes.length, kOfJokes.length, mOfJokes.length, nOfJokes.length]
            for(let i = 0; i<weeks.length; i++){
                console.log(weeks[i])
                console.log(weeks[i] > recordJoke, "weeks[i] > recordJoke")
                if (weeks[i] > recordJoke){
                    secondJoke = recordJoke
                    recordJoke = weeks[i]

                }
                else{
                    console.log(weeks[i] > secondJoke, "weeks[i] > secondJoke")
                    if (weeks[i] > secondJoke && weeks[i] < recordJoke){
                        thirdJoke = secondJoke
                        secondJoke = weeks[i]
                    }
                    else{
                        console.log(weeks[i] > thirdJoke, "weeks[i] > thirdJoke")
                        if (weeks[i] > thirdJoke && weeks[i] < secondJoke){
                            thirdJoke = weeks[i]
                        }
                    }
                }
            }
            JSC.Chart('chartDiv', {
                type: 'vertical column',
                series: [
                   {
                    name: "Egy napi adatok",
                      points: [
                        {x: date4, y: zOfJokes.length},
                        {x: date3, y: kOfJokes.length},
                        {x: date2, y: mOfJokes.length},
                        {x: date1, y: nOfJokes.length},
                        {x: "Előző Heti Átlag", y: weekAverage},
                        {x: "E Heti Átlag", y: weekAverage1},
                        {x: "Változás", y: weekAverage1-weekAverage}
                      ]
                   }
                ]
             });
             
        }
    xmlhttp.open('POST', 'jokes.php');
    xmlhttp.send();

}, 3000);
setInterval(() => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        let jokes = JSON.parse(this.responseText);
        console.log(jokes)
        recordJoke = jokes[0].id
        secondJoke = jokes[1].id
        thirdJoke = jokes[2].id
        if(recordJoke === secondJoke){
            secondJoke = jokes[2].id
            thirdJoke = jokes[3].id
        }
        else if(secondJoke === thirdJoke){
            thirdJoke = jokes[3].id
        }
        console.log(recordJoke, secondJoke, thirdJoke)
        JSC.Chart('chartDiv1', {
            title_label_color: "red",
            yAxis_label_color: "#FF0000",
            type: 'vertical column',
            series: [
               {
                  points: [
                    {x: "Harmadik legtöbb", y: parseInt(thirdJoke)},
                    {x: "Második legtöbb", y: parseInt(secondJoke)},
                    {x: "Legtöbb", y: parseInt(recordJoke)},
                  ]
               }
            ]
         });
    }
    xmlhttp.open('POST', 'jokesGroupped.php');
    xmlhttp.send();
}, 3000);