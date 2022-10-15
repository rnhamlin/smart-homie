DROP DATABASE IF EXISTS smart homies;
CREATE DATABASE smart homies;
USE smart homies;

CREATE TABLE subjects (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    standard VARCHAR(30)
);

CREATE TABLE curricula (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    subject_id INTEGER,
    CONSTRAINT fk_subjects FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL
);

CREATE TABLE assignments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    curricula_id INTEGER,
    grade INTEGER,
    subject_id INTEGER,
    this_week BOOLEAN NOT NULL,
    completed BOOLEAN NOT NULL,
    CONSTRAINT fk_curricula FOREIGN KEY (curricula_id) REFERENCES curricula(id) ON DELETE SET NULL,
    CONSTRAINT fk_subject FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL
    );

CREATE TABLE students (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    grade VARCHAR(50) NOT NULL,
);