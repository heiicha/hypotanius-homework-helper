from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('landing.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/home')
def user_home():
    return render_template('home.html')

@app.route('/assignments')
def assignments():
    return render_template('assignments.html')

@app.route('/classes')
def classes():
    return render_template('classes.html')

@app.route('/leaderboard')
def leaderboard():
    return render_template('leaderboard.html')

if __name__ == '__main__':
    app.run(debug=True) 