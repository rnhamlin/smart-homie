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
  
INSERT INTO curricula (title, subject_id)
VALUES
  ('Leap Into Reading', 1),
  ('Right Start Math', 3),
  ('Generation Genius', 7),
  ('DK Biology', 7), 
  ('Life of Fred', 3),
  ('Keyboarding without Tears', 8)
  ('Big Life Journal', 5);

INSERT INTO students (last_name, first_name, grade)
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

