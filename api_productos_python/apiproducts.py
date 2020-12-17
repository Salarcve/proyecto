from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId


app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/productos'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.productos

@app.route('/createProducto', methods=['POST'])
def createProducto():
  print(request.json)
  id = db.insert({
    'name': request.json['name'],
    'price': request.json['price'],
    'quantity': request.json['quantity']
  })
  return jsonify({'message': 'Producto creado'})


@app.route('/getProducto', methods=['GET'])
def getProducto():
    productos = []
    for doc in db.find():
        productos.append({
          '_id': str(ObjectId(doc['_id'])),
          'name': doc['name'],
          'price': doc['price'],
          'quantity': doc['quantity']
        })
    return jsonify(productos)

@app.route('/deleteProducto/<id>', methods=['DELETE'])
def deleteProducto(id):
  db.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'Producto eliminado'})

@app.route('/Updateproducto/<id>', methods=['PUT'])
def Updateproducto(id):
  print(request.json)
  db.update_one({'_id': ObjectId(id)}, {"$set": {
    'name': request.json['name'],
    'price': request.json['price'],
    'quantity': request.json['quantity']
  }})
  return jsonify({'message': 'Producto actualizado'})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)