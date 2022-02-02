lines = []
with open("utasadat.txt", "r") as f: #read the txt file
    lines = f.readlines() #read each row as different element in list
#print(lines)
#print(len(lines)) #2. feladat, utasok száma = lista elemeinek száma
passengers = [] #dictionary of passengers
with open("utasadat.txt", "r") as f:
    for line in f:
        passenger = {}
        supplementaryVar = list(line.strip("\n").split(" "))
        passenger["stopId"] = int(supplementaryVar[0])
        passenger["dateOfBoard"] = supplementaryVar[1]
        passenger["userId"] = supplementaryVar[2]
        passenger["typeOfTicket"] = supplementaryVar[3]
        passenger["expirationDate"] = int(supplementaryVar[4])
        passengers.append(passenger)
for passenger in passengers:
    dateAndTime = passenger["dateOfBoard"].split("-") #divide the time and date of board and store it as a dictionary
    #print(passenger["dateOfBoard"])
    dateOfBoard = {
        
    }
    dateOfBoard["date"] = int(dateAndTime[0]) 
    dateOfBoard["time"] = int(dateAndTime[1])
    passenger["dateOfBoard"] = dateOfBoard
    #print(passenger)
#print(list(filter(lambda x: x["dateOfBoard"]["date"] > x["expirationDate"] and x["typeOfTicket"] != "JGY", passengers))) 
#filter out those who entered with a ticket and those whose bérlet is still valid

def passengerCount(dictionary):
    currStop = 0 #to check the current stop
    currCount = 0 #to check the current count of passengers in a stop
    greaterCount = 0 #the most passengers in a stop
    for i in range(len(dictionary)):
        if(currStop == int(dictionary[i]["stopId"])): #(check if we are still checking the same stop)
            currCount += 1 #if yes add to the number of passengers in that stop
        else:
            if(currCount > greaterCount): #if not and the number of passengers is greater than the most number of passengers
                greaterCount = currCount #then it is the number of passengers
                currCount = 0 #reset the number of passengers in the same stop
                currStop += 1 #lets move on to the next stop
            else:
                currCount = 0
                currStop += 1
                
    return greaterCount
#print(passengerCount(passengers)) #number of most passengers wanting to board at a stop

print(len(list(filter(lambda x: x["typeOfTicket"] == "TAB" or x["typeOfTicket"] == "NYB" and x["dateOfBoard"]["date"] > x["expirationDate"], passengers))), len(list(filter(lambda x: x["typeOfTicket"] == "NYP" or x["typeOfTicket"] == "RVS" or x["typeOfTicket"] == "GYK" and x["dateOfBoard"]["date"] > x["expirationDate"], passengers))))  


