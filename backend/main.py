import pandas as pd
from flask import Flask, jsonify, Response, request
import db
import json


app = Flask(__name__)

# Funcionalidades


@app.route('/')
def homepage():
    return 'Bem-vindo ao Apuro-API! E Pedro, você é um corno!'


@app.route('/users/register', methods=['GET'])
def register():

    try:
        username = request.form['username']
        password = request.form['password']
        usertype = request.form['usertype']

        usernames = [*db.mongo('login').distinct("username")]
        print(usernames)

        user = {"username": username,
                "password": password,
                "usertype": usertype}

        if username not in usernames and password.strip() != '' and username.strip() != '':
            db.mongo("login").insert_one(user)
        else:
            return Response("Usuário já cadastrado ou credenciais inválidas!", status=400)

        return Response(
            response=json.dumps(
                {"message": "Usuário cadastrado com sucesso!",
                 "username": username}),
            status=200,
            mimetype='application/json')

    except Exception as ex:
        print(ex)


@app.route('/users/login', methods=['GET'])
def login():

    try:
        username = request.form['username']
        password = request.form['password']
        usertype = request.form['usertype']

        user = pd.DataFrame(db.mongo("login").find(
            {"username": username}, {"_id": 0})).iloc[0]

        if user["username"] == username and user["password"] == password and user["usertype"] == usertype:

            return Response(
                response=json.dumps(
                    {"message": "Usuário logado com sucesso!",
                     "login": True}),
                status=200,
                mimetype='application/json')

        return Response("Usuário e/ou Senha inválidos!", status=400)

    except Exception as ex:
        print(ex)


if __name__ == '__main__':
    app.run(debug=True)
