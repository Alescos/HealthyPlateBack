from flask import Flask, request, jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/recetas/<code>", methods=['GET'])
def get_receta(code):
    con = db.get_connection()
    dbreceta = con.dbrecetas
    try:
        recetas = dbreceta.recetas
        response = app.response_class(
            response=dumps(recetas.find_one({'_id': ObjectId(code)})),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")

@app.route("/recetas", methods=['GET'])
def get_recetas():
    con = db.get_connection()
    dbreceta = con.dbrecetas
    try:
        recetas = dbreceta.recetas
        response = app.response_class(
            response=dumps(recetas.find()),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")

@app.route("/recetas", methods=['POST'])
def create():
    data = request.get_json()
    con = db.get_connection()
    dbreceta = con.dbrecetas  
    try:
        recetas = dbreceta.recetas
        recetas.insert(data)
        return jsonify({"message":"OK"})
    finally:
        con.close()
        print("Connection closed")

@app.route("/recetas/<code>", methods=['PUT'])
def update(code):
    data = request.get_json()
    con = db.get_connection()
    dbreceta = con.dbrecetas
    try:
        recetas = dbreceta.recetas
        recetas.update(
            {'_id': ObjectId(code)},
            data
        )
        return jsonify({"message":"OK"})
    finally:
        con.close()
        print("Connection closed")

@app.route("/recetas/<code>", methods=['DELETE'])
def delete(code):
    con = db.get_connection()
    dbreceta = con.dbrecetas
    try:
        recetas = dbreceta.recetas
        recetas.delete_one({'_id': ObjectId(code)})
        return jsonify({"message":"OK"})
    finally:
        con.close()
        print("Connection closed")
