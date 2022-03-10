#első feladat
tasks = []

with open("felszam.txt", "r") as f:
    for line in f:
        line = line.strip("\n,.").split(" ")
        tasks.append(line)
#második feladat
print(len(tasks) / 2)

#harmadik feladat
realTasks= []
for i in range(0, len(tasks), 2):
    realTask = {}
    realTask["question"] = " ".join([str(word) for word in tasks[i]])
    realTask["answer"] = tasks[i+1][0]
    realTask["points"] = tasks[i+1][1]
    realTask["topic"] = tasks[i+1][2]
    realTasks.append(realTask)

print(f"Az adatfajlban {len(list(filter(lambda x: x['topic'] == 'matematika', realTasks)))} matematika feladat van, 1 pontot er {len(list(filter(lambda x: x['topic'] == 'matematika' and x['points'] == '1', realTasks)))} feladat, 2 pontot er {len(list(filter(lambda x: x['topic'] == 'matematika' and x['points'] == '2', realTasks)))} feladat, 3 pontot er {len(list(filter(lambda x: x['topic'] == 'matematika' and x['points'] == '3', realTasks)))} feladat.")

#negyedik feladat
#nem értem itt mit kéne csinálni

#ötödik feladat
def topic(dict):
    return dict['topic']
print(set(list(map(topic, realTasks))))

#hatodik feladat
import random
topic = input("Adjon meg egy témakört: ")
randomNumber  = random.randint(0, len(list(filter(lambda x: x["topic"] == topic, realTasks)))-1)
def question(dict):
    return dict['question']
#print(randomNumber)
#print(list(map(question, filter(lambda x: x["topic"] == topic, realTasks)))[randomNumber])
answer = input(f"{list(map(question, filter(lambda x: x['topic'] == topic, realTasks)))[randomNumber]}: ")
if(answer == list(filter(lambda x: x['topic'] == topic, realTasks))[randomNumber]["answer"]):
    print(f"A válasz helyes. A válasz {list(filter(lambda x: x['topic'] == topic, realTasks))[randomNumber]['points']} pontot ér")
else:
    print(f"A válasz helytelen. A válasz 0 pontot ér. A helyes válasz {list(filter(lambda x: x['topic'] == topic, realTasks))[randomNumber]['answer']}")


#hetedik feladat

randomTestNumber = random.sample(range(len(realTasks)), 10)
tesTasks = []
for num in randomTestNumber:
    tesTasks.append(realTasks[num])

    
with open("tesztfel.txt", "w") as f:
    points = 0
    for task in tesTasks:
        points += int(task["points"])
        f.write(f'{task["points"]} ')
        f.write(f'{task["answer"]} ')
        f.write(f'{task["question"]}\n')
    f.write(f'A feladatsorra osszesen {points} pont adhato.')