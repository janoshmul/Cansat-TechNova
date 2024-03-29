import csv

def data_to_liste(file_path):
    csv_file = csv.reader(file)
    data = []
    with open(csv_file,'r') as file:
        csv_file = csv.reader(file)
        for row in csv_file:
            data.append(row)
    return row


print(data_to_liste('C:/Users/janos/Cansat-TechNova/Cansat/Cansat-Flask/test_data.csv'))
