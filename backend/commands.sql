-- Classes
CREATE TABLE IF NOT EXISTS Class (
    class_id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_name TEXT NOT NULL UNIQUE
);

-- Users
CREATE TABLE IF NOT EXISTS Users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

-- Homework
CREATE TABLE IF NOT EXISTS Homework (
    homework_id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INT NOT NULL,
    subject TEXT NOT NULL,
    title TEXT NOT NULL, 
    desc TEXT NOT NULL,
    due_date TEXT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(class_id)
);
