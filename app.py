#**********************************************#
#                                              #
#           Enviro+ Sensor Backend             #
#                 Flask API                    #
#                                              #
#               By dedSyn4ps3                  #
#                                              #
#**********************************************#


import flask
from flask import Flask

from bme280 import BME280
from enviroplus import gas

try:
    from smbus2 import SMBus
except ImportError:
    from smbus import SMBus

import logging


# Tuning factor for compensation. Decrease this number to adjust the
# temperature down, and increase to adjust up
factor = 2.05


###############################################
#  Basic logging from enviroplus-python repo  #
###############################################

logging.basicConfig(
    format='%(asctime)s.%(msecs)03d %(levelname)-8s %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S')

logging.info("""app.py - Flask backend API used by Web UI to retrieve Enviro+ sensor readings

Press Ctrl+C to Exit...
""")


########################
#  Initialize Sensor   #
########################

bus = SMBus(1)
bme280 = BME280(i2c_dev=bus)

app = Flask(__name__)


#################
#  API Routes   #
#################

# temperature route
@app.route("/temperature")
def temperature():
    temps = [get_cpu_temperature()] * 4
    cpu = get_cpu_temperature()

    # Decrease Variations
    temps = temps[1:] + [cpu]
    avg = sum(temps) / float(len(temps))
    raw = bme280.get_temperature()
    new_temp = raw - ((avg - raw) / factor)

    resp = flask.Response("{:.1f}".format(new_temp))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081'
    
    return resp

# humidity route
@app.route("/humidity")
def humidity():
    humidity = bme280.get_humidity()
    resp = flask.Response("{:.1f}".format(humidity))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081'
    return resp

# pressure route
@app.route("/pressure")
def pressure():
    pressure = bme280.get_pressure()
    resp = flask.Response("{:.1f}".format(pressure))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081'
    return resp

# Reducing(CO) route
@app.route("/reducing")
def reducing():
    co = gas.read_all()
    co = co.reducing / 1000
    resp = flask.Response("{:.2f}".format(co))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081'
    return resp

# Ammonia(NH3) route
@app.route("/ammonia")
def ammonia():
    ammonia = gas.read_all()
    ammonia = ammonia.nh3 / 1000
    resp = flask.Response("{:.2f}".format(ammonia))
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:8081'
    return resp


# CPU Temperature Compensation
def get_cpu_temperature():
    with open("/sys/class/thermal/thermal_zone0/temp", "r") as f:
        temp = f.read()
        temp = int(temp) / 1000.0
    return temp

if __name__ == "__main__":
    app.run(debug = False) 