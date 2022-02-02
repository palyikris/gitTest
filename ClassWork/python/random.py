szamok = [10, -50, 66, -42, 31, -78, 41, -88, 5, -34, 62]

#Mennyi a listában lévő számok átlaga?

# def avg(listOfNums):
#     return(sum(listOfNums) / len(listOfNums))

# avgOfList = avg(szamok)
# print(f"A lista számainak átlaga ${avgOfList}")


class Random:
    
    def __init__(self, listOfNums):
        self.listOfNums = listOfNums
    
    def Avg(self):
        avg = sum(self.listOfNums) / len(self.listOfNums)
        print(f"A lista számainak átlaga ${avg}")
        
    def Second(self):
        second = sorted(self.listOfNums)
        print(second[1])
        
    def oddOrEvenSort(self):
        print(sorted(self.listOfNums, key = lambda x : x%2, reverse = True))
        

result = Random(szamok)
print(result.Avg(), result.Second(), result.oddOrEvenSort())    