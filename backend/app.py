from flask import Flask, request
import sqlite3
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("./secrets/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

app = Flask(__name__)

database = 'database.db'

with open('./commands.sql') as f:
    sqlcmds = [i for i in f.read().split(';') if '--' in i]

def databaseInit(create: bool):
    conn = sqlite3.connect(database)
    cursor = conn.cursor()
    
    if not create:
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()
        for table in tables:
            if table[0] != 'sqlite_sequence':
                cursor.execute(f"DROP TABLE IF EXISTS {table[0]}")

    for cmd in sqlcmds:
        cursor.execute(cmd)

    conn.close()

@app.route('/login', methods = ['POST'])
def login():
    conn = sqlite3.connect(database)
    cursor = conn.cursor()

    data = request.get_json()
    email = data.get('email')

    cursor.execute('SELECT user_id FROM Users WHERE email = ?', (email,))
    user_id_tuple = cursor.fetchone()
    conn.close()
    
    if user_id_tuple:
        return True
    return False

@app.route('/signup', methods = ['POST'])
def signup():
    conn = sqlite3.connect(database)
    cursor = conn.cursor()

    data = request.get_json()
    email = data.get('email')

    cursor.execute('INSERT INTO Users (email) VALUES ?', (email,))

    conn.close()

if __name__ == '__main__':
    databaseInit(True) # Change to False to reset data
    app.run(debug=True)