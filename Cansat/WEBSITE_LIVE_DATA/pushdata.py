import csv
from random import randint
data = []
for i in range(100):
    data.append([i,1+2*i])


with open('testdata.csv', 'a', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)