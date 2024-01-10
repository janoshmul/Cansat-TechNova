from machine import I2C
# La bibliothèque BME280 fonctionne également pour le capteur BMP280.
from bme280 import BME280, BMP280_I2CADDR
from time import sleep
# Initie un nouveau connecteur I2C sur le bus 0, sda=GP8, scl=GP9 @ 400 KHz
# (par défaut)
i2c = I2C(0)
# Créer une nouvelle variable BME280 connectée au bus i2c 0 communiquant
# avec l'adresse BMP280_I2CADDR
bmp = BME280( i2c=i2c, address=BMP280_I2CADDR)
while True:
# imprimer un tuple avec (température, pression et humidité)
print( bmp. raw_values)
sleep(1)
