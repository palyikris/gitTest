print("Első feladat")
datas = []
with open("utca.txt", "r") as f:
    f.readline()
    for line in f:
        line = line.strip().split(" ")
        data = {}
        data["id"] = line[0]
        data["street"] = line[1]
        data["house"] = line[2]
        data["type"] = line[3]
        data["area"] = int(line[4])
        datas.append(data)
print("Második feladat")
print(f"A mintában {len(datas)} telek szerepel.")        
print("Harmadik feladat")
# owner = input("Egy tulajdonos adószáma: ")
# ownerData = [x for x in datas if x["id"] == owner][0]
# print(f"{ownerData['street']} utca {ownerData['house']}")
print("Negyedik feladat")
def ado(typeOf, area):
    letters = ["A", "B", "C"]
    values = [800, 600, 100]
    return(values[letters.index(typeOf)]*area)
# print(ado("C", 180))
print("Ötödik feladat")
print(f'A sávba {len([x for x in datas if x["type"] == "A"])}, az adó {sum([ado(x["type"], x["area"]) for x in datas if x["type"] == "A"])}')
print(f'A sávba {len([x for x in datas if x["type"] == "B"])}, az adó {sum([ado(x["type"], x["area"]) for x in datas if x["type"] == "B"])}')
print(f'A sávba {len([x for x in datas if x["type"] == "C"])}, az adó {sum([ado(x["type"], x["area"]) for x in datas if x["type"] == "C"])}')

print("Hatodik feladat")
oddStreets = []
for i in range(len(datas)):
    if(datas[i]["street"] == datas[i-1]["street"] and datas[i]["type"] != datas[i-1]["type"]):
        oddStreets.append(datas[i]["street"])
print("\n".join(sorted(set(oddStreets))))

print("Hetedik feladat")
with open("fizetendo.txt", "w") as f:
    datasForPay = []
    for line in datas:
        dataForPay = [line["id"], str(sum([ado(x["type"], x["area"]) for x in datas if x["id"] == line["id"]]))]
        datasForPay.append(dataForPay)
    newDatasForPay = []
    for data in datasForPay:
        if(data not in newDatasForPay):
            newDatasForPay.append(data)
    for data in newDatasForPay:
        print(" ".join(data), file=f)    