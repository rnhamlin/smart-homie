INSERT INTO subjects (name, standard)
VALUES
  ('Reading', 'Language Arts'),
  ('Handwriting', 'Language Arts'),
  ('Addition', 'Math'),
  ('Subtraction', 'Math'),
  ('Geometry', 'Math'),
  ('Geography', 'History - Social Studies'),
  ('Painting', 'Arts'),
  ('Biology', 'Science'),
  ('Typing', 'Computer Science');
  
INSERT INTO curricula (title, subject)
VALUES
  ('Leap Into Reading', 'Reading'),
  ('Right Start Math', 'Math'),
  ('Generation Genius', 'Science'),
  ('DK Biology', 'Science'), 
  ('Life of Fred', 'Math'),
  ('Keyboarding without Tears', 'Computer Science')
  ('Big Life Journal', 'Social Studies');

INSERT INTO assignments (title, curricula, subject)
VALUES
  ('Worksheet 1', 'Right Start Math', 'Math'),
  ('I have big feelings', 'Big Life Journal', 'Social Studies'),
  ('Level 2', 'Keyboarding without Tears', 'Computer Science'),
  ('Chemical and Physical Changes', 'Generation Genius', 'Science');

INSERT INTO students (last_name, first_name, grade)
VALUES
('Duck', 'Daffy', 1),
('Fudd', 'Elmer', 4),
('Bunny', 'Bugs', 2); 