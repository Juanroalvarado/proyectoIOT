# -*- coding: utf-8 -*-
"""
Created on Tue Nov 14 10:31:46 2017

@author: juanro
"""

"""Module importation"""
from elasticsearch import Elasticsearch, RequestsHttpConnection
import serial
import json
from datetime import datetime
from decimal import Decimal

uri = "34.231.83.229:9200"
index = "iot_inc"
type = "logs"
arduino_connect = "COM3"



# Señal cuadrada, luz, temperatura,

def jsonify(bulk):
    body = ''

    body += '{"index": {"_index": "%s", "_type": "%s"}}\n%s\n' % \
            (index, type, json.dumps(bulk, default=json_serial))

    return body

def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""
    if isinstance(obj, datetime):
        serial = obj.isoformat()
        return serial
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError(obj, "Type not serializable")

def send_to_eslatic(connect):
    while True:
        from_arduino = str(connect.readline())
        from_arduino_clean = from_arduino[2:].split(sep=',')

        tiempo = datetime.now()
        cuadrada = from_arduino_clean[0]
        luz = from_arduino_clean[1]
        temp = from_arduino_clean[2]
        from_arduino = {"DT":tiempo, "cuadrada":cuadrada, "luz":luz, "temperatura":temp}
        to_send = jsonify(from_arduino)
        print to_send
        try:
            es.bulk(to_send)
            print("Bulk ok")
        except:
            print("Bulk failed")




""" Trying Elastic Connectio"""
try:
    es = Elasticsearch(uri)
    print("Connection to ES succesful")

except:
    print("Failed connection to elastic")

"""Opening of the serial port"""


try:
    arduino = serial.Serial(arduino_connect,timeout=1)
    print("Connection to Arduino succesful")
    send_to_eslatic(arduino)

except:
    print('Please check the port')


