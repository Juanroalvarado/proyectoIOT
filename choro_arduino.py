# -*- coding: utf-8 -*-
"""
Created on Tue Nov 14 10:31:46 2017

@author: juanro
"""

"""Module importation"""
import elasticsearch
import serial
import json

uri = "192.168.100:9200"
index = "arquitectura"
type = "logs"

es = elasticsearch.Elasticsearch(uri)

def jsonify(bulk):
    body = ''

    for doc in bulk:
        body += '{"index": {"_index": "%s", "_type": "%s"}}\n%s\n' % \
                (elastic_index, elastic_type, json.dumps(doc, default=json_serial))

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
        print(str(connect.readline()))


"""Opening of the serial port"""
try:
    arduino = serial.Serial("COM3",timeout=1)
    send_to_eslatic(arduino)
except:
    print('Please check the port')




