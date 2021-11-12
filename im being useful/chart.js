setInterval(() => {
    const xmlhttp = new XMLHttpRequest();
    console.log(xmlhttp)
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
                console.log(i === 0, "i === 0", jokes[i].id, jokes[i].dateOf)
                if(i === 0){
                    console.log("bam")
                    nOfJokes.push(jokes[i])
                    currDate = jokes[i].dateOf
                }
                else{
                    if(jokes[i].dateOf === currDate){
                        nOfJokes.push(jokes[i])
                        console.log("heh")
                    }
                    else if(jokes[i].dateOf != currDate){
                        console.log("hah")
                        if(currDate1 == ""){
                            console.log("huh")
                            currDate1 = jokes[i].dateOf 
                            mOfJokes.push(jokes[i])
                            console.log(currDate1)
                        }
                        else{
                            if(jokes[i].dateOf === currDate1){
                                console.log("bám")
                                mOfJokes.push(jokes[i])
                            }
                            else{
                                if(currDate2 === ""){
                                    console.log("bah")
                                    currDate2 = jokes[i].dateOf
                                    kOfJokes.push(jokes[i])
                                }
                                else{
                                    console.log("buh")
                                    if(currDate2 === jokes[i].dateOf){
                                        console.log("beh")
                                        kOfJokes.push(jokes[i])
                                    }
                                    else{
                                        console.log("béh")
                                        if(currDate3 === ""){
                                            console.log("báh")
                                            currDate3 = jokes[i].dateOf
                                            zOfJokes.push(jokes[i])
                                        }
                                        else{
                                            console.log("búh")
                                            if(jokes[i].dateOf === currDate3){
                                                console.log("bűh")
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
            console.log(nOfJokes, mOfJokes, kOfJokes, zOfJokes, currDate, currDate1, currDate2, currDate3)
            let date1 = nOfJokes[0].dateOf
            let date2 = mOfJokes[0].dateOf
            let date3 = kOfJokes[0].dateOf
            let date4 = zOfJokes[0].dateOf
            let weekAverage = (zOfJokes.length + kOfJokes.length + mOfJokes.length + nOfJokes.length) / 4
            let weeks = [zOfJokes.length, kOfJokes.length, mOfJokes.length, nOfJokes.length]
            let recordJoke = 0;
            let secondJoke = 0;
            let thirdJoke = 0;
            for(let i = 0; i<weeks.length; i++){
                if (weeks[i] > recordJoke){
                    recordJoke = weeks[i]
                }
                else{
                    if (weeks[i] > secondJoke){
                        secondJoke = weeks[i]
                    }
                    else{
                        if (weeks[i] > thirdJoke){
                            thirdJoke = weeks[i]
                        }
                    }
                }
            }
            console.log(date1, date2)
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
                        {x: "Heti Átlag", y: weekAverage}
                      ]
                   }
                ]
             });
             JSC.Chart('chartDiv1', {
                title_label_color: "red",
                yAxis_label_color: "#FF0000",
                type: 'vertical column',
                series: [
                   {
                    name: "Rekordok",
                      points: [
                        {x: "Harmadik legtöbb", y: thirdJoke},
                        {x: "Második legtöbb", y: secondJoke},
                        {x: "Legtöbb", y: recordJoke},
                      ]
                   }
                ]
             });
        }
    xmlhttp.open('POST', 'jokes.php');
    xmlhttp.send();

}, 3000);
