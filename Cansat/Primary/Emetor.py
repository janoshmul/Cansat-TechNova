from machine import SPI, Pin
from rfm69 import RFM69
import time
from machine import I2C
from bme280 import BME280, BMP280_I2CADDR
i2c = I2C(0)
bmp = BME280( i2c=i2c, address=BMP280_I2CADDR)
FREQ           = 433.1
ENCRYPTION_KEY = b"\x01\x02\x03\x04\x05\x06\x07\x08\x01\x02\x03\x04\x05\x06\x07\x08"
NODE_ID        = 120 # ID of this node
BASESTATION_ID = 100 # ID of the node (base station) to be contacted

spi = SPI(0, baudrate=50000, polarity=0, phase=0, firstbit=SPI.MSB)
nss = Pin( 5, Pin.OUT, value=True )
rst = Pin( 3, Pin.OUT, value=False )

rfm = RFM69( spi=spi, nss=nss, reset=rst )
rfm.frequency_mhz = FREQ

# Optionally set an encryption key (16 byte AES key). MUST match both
# on the transmitter and receiver (or be set to None to disable/the default).
rfm.encryption_key = ( ENCRYPTION_KEY )
rfm.node    = NODE_ID # This instance is the node 120

print( 'Freq            :', rfm.frequency_mhz )
print( 'NODE            :', rfm.node )
print( 'BaseStation NODE:', BASESTATION_ID )

# Send a packet and waits for its ACK.
# Note you can only send a packet up to 60 bytes in length.
rfm.ack_retries = 3 # 3 attempt to receive ACK
rfm.ack_wait    = 0.5 # 500ms, time to wait for ACK 
rfm.destination = BASESTATION_ID # Send to specific node 100
counter=0
ctime = time.time()
while True:
    hpa=(bmp.raw_values[1])
    temp=(bmp.raw_values[0])
    msg = ":%i,%i,%6.2f,%5.2f;" % (counter,time.time()-ctime,hpa,temp)
    ack = rfm.send_with_ack(bytes( msg, "utf-8") )
    print("   +->", "ACK received" if ack else "ACK missing" )
    time.sleep(0.1)
    counter=counter+1
