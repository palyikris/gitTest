import mysql.connector 

mydb = mysql.connector.connect(
    host="localhost",
    username="root",
    password="",
    database="kristoftest"
)

mycursor = mydb.cursor()

#mycursor.execute("select * from costumers")

#sql="insert into costumers (name, adress) values (%s, %s)"
#val = ("John", "Highway 21")
#if u want to insert multiple records:
# val = [
#      (record),
#      (record)
#]
#execute helyett executemany
#mycursor.execute(sql, val)
#mydb.commit()

mycursor.execute("select * from costumers")

myresult = mycursor.fetchall()

for x in myresult:
    print(x)