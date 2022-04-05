# def first():
#     print("Első feladat")
#     txt = input("Adja meg a szöveget: ")  
#     print(len(set(list(txt))), .join(set(txt)))  

# first()

# ! ----------------------------------------------------------------

words = []

# ! ----------------------------------

def second():
    print("Második feladat")
    with open("szotar.txt", "r") as f:
        for line in f:
            words.append(line.strip())
    #print(words)
    
second()

# ! ----------------------------------------------------------------

# def third():
#     print("Harmadik feladat")
#     with open("abc.txt", "w") as f:
#         for word in words:
#             print(f"{' '.join(sorted(list(word)))}\n", file=f)

# third()

# # ! ----------------------------------------------------------------

# def fourth():
#     print("Negyedik feladat")
#     word1 = input("Adjon meg egy szót: ")
#     word2 = input("Adjon meg még egy szót: ")
    
#     if(' '.join(sorted(list(word1))) == ' '.join(sorted(list(word2)))):
#         print("Anagrammák")
#     else:
#         print("Nem anagrammák")

# fourth()

# ! ----------------------------------------------------------------

# def fifth():
#     print("Ötödik feladat")
#     word = input("Adjon meg egy szót: ")
#     if(len(list(filter(lambda x: ' '.join(sorted(list(x))) == ' '.join(sorted(list(word))), words))) == 0):
#         print("Nincs a szótárban anagramma")
#     else:
#         print(list(filter(lambda x: ' '.join(sorted(list(x))) == ' '.join(sorted(list(word))), words)))

# fifth()

# ! -------------------------------

# def sixth():
#     print("Hatodik feladat")
#     print("\n".join([word for word in words if len(word) == len(max(words, key = lambda x: len(x)))]))    

# sixth()

# ! ------------------------------

def seventh():
    print("Hetedik feladat")
    
    with open("rendezve.txt", "w") as f:
        words.sort(key = len or abc)
        for i in range(0, len(words)-1):
            if(len(words[i]) == len(words[i+1])):
                if(' '.join(sorted(list(words[i]))) == ' '.join(sorted(list(words[i+1])))):
                    print(words[i], file=f, end=" ")
                elif(i == len(words)-2):
                    print(words[len(words)-1], file=f, end=" ")
                else:
                    print(words[i], file=f, end="\n")
            
            else:
                print(words[i], file=f, end="\n\n")
            print(i == len(words)-2, i)
seventh()