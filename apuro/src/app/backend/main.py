import pandas as pd
from flask import Flask, jsonify, Response, request
from flask_cors import CORS
import db
import json


app = Flask(__name__)
CORS(app)

#Funcionalidades

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

        user = {"username": username,
                "password": password, 
                "usertype": usertype}

        if username not in usernames and password.strip() != '' and username.strip() != '':
            db.mongo("login").insert_one(user)
        else:
            return Response("Usuário já cadastrado ou Nome/Senha inválidos!", status=400)

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

        user = pd.DataFrame(db.mongo("login").find({"username": username}, {"_id": 0})).iloc[0]

        if user["username"] == username and user["password"] == password and user["usertype"] == usertype:
            
            return Response(
                response=json.dumps(
                    {"message": "Usuário logado com sucesso!",
                    "username": username,
                    "login": True}),
                status=200,
                mimetype='application/json')

        return Response(
                response=json.dumps(
                    {"message": "Credenceiais inválidas!",
                    "username": username,
                    "login": False}),
                status=400,
                mimetype='application/json')

    except Exception as ex:
        print(ex)


@app.route('/exams/create', methods=['POST'])
def exam_create():
        
    try:
        content = request.json
        exam_name = content['exam_name']
        exam_subject = content['exam_subject']
        exam_start = content['exam_start']
        exam_end = content['exam_end']
        exam_questions = content['exam_questions']

        exams = [*db.mongo('exams').distinct("name")]

        exam = {"name": exam_name,
                "subjectCode": exam_subject,
                "startDateTime": exam_start,
                "endDateTime": exam_end,
                "questions": exam_questions}

        if exam_name not in exams:
            db.mongo("exams").insert_one(exam)

            return Response(
                response=json.dumps(
                    {"message": "Exame cadastrado com sucesso!",
                    "exam_name": exam_name}),
                status=200,
                mimetype='application/json')
            
        return Response(
                response=json.dumps(
                    {"message": "Exame já existente!",
                    "username": exam_name,
                    "login": False}),
                status=400,
                mimetype='application/json')

    except Exception as ex:
        print(ex)


@app.route('/exams/get', methods=['GET'])
def exam_get():

    try:
        exam = list(db.mongo("exams").find({}, {"_id": 0}))
        exam = json.dumps(exam)

        return exam

    except Exception as ex:
        print(ex)


@app.route('/exams/answer', methods=['POST'])
def exam_answer():

    try:
        content = request.json
        exam_name = content['examName']
        exam_username = content['username']
        exam_answers = content['answers']     

        exam = {"examName": exam_name,
                "username": exam_username,
                "answers": exam_answers}

        db.mongo("answers").insert_one(exam)

        return Response(
            response=json.dumps(
                {"message": "Respostas cadastradas com sucesso!",
                "exam_name": exam_name}),
            status=200,
            mimetype='application/json')

    except Exception as ex:
        print(ex)

@app.route('/exams/correct', methods=['POST'])
def exam_correct():

    try:
        content = request.json
        exam_name = content['examName']
        exam_username = content['username']

        questions = list(db.mongo("exams").find({"name": exam_name}, {"_id": 0, "questions": 1}))

        answers = list(db.mongo("answers").find({"examName": exam_name, "username": exam_username}, {"_id": 0, "answers": 1}))

        counter = 0

        for id, question in enumerate(questions[0]["questions"]):
            if question["correct_alternative_number"] == answers[0]["answers"][id]["selectedAlternativeId"]:
                counter += 1

        result = f"{counter}/{len(questions[0]['questions'])}"
                
        results = {"examName": exam_name,
                "username": exam_username,
                "result": result}

        return results

    except Exception as ex:
        print(ex)


if __name__ =='__main__':
    app.run(debug=True)