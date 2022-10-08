INSERT INTO subjects (name, curricula, standard)
VALUES
  ('Reading', null, 'Language Arts'),
  ('Handwriting', null, 'Language Arts'),
  ('Addition', null, 'Math'),
  ('Geometry', null, 'Math'),
  ('Geography', null, 'History-Social Studies'),
  ('Painting', null, 'Arts'),
  ('Biology', null, 'Science'),
  ('Typing', null, 'Computer Science');
  
INSERT INTO curricula (title, subject)
VALUES
  ('Leap Into Reading', 'Reading'),
  ('Right Start Math', 'Math'),
  ('Generation Genius', 'Science'),
  ('DK Biology', 'Science'), 
  ('Life of Fred', 'Math'),
  ('Keyboarding without Tears', 'Computer Science')
  ('Big Life Journal', 'Social Studies');

INSERT INTO student (last_name, first_name, grade)
VALUES
('Duck', 'Daffy', 1),
('Fudd', 'Elmer', 2),
('Bunny', 'Bugs', 3),
('Coyote', 'Wily', 4); 

INSERT INTO assignments (title, curricula, subject, student)
VALUES
  ('Worksheet 1', 'Right Start Math', 'Math', 'Daffy Duck'),
  ('I have big feelings', 'Big Life Journal', 'Social Studies', 'Elmer Fudd'),
  ('Level 2', 'Keyboarding without Tears', 'Computer Science', 'Bugs Bunny'),
  ('Chemical and Physical Changes', 'Generation Genius', 'Science', 'Wily Coyote');

