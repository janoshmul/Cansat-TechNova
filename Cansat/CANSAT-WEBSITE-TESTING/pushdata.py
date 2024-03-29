import csv
from random import randint
data = []
for i in range(100):
    data.append([i,randint(0,100)])


with open('testdata.csv', 'a', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)