USE smart homies;

INSERT INTO subjects 
  (name, curricula, standard)
VALUES
  ('Reading', null, 'Language Arts'),
  ('Handwriting', null, 'Language Arts'),
  ('Addition', null, 'Math'),
  ('Geometry', null, 'Math'),
  ('Geography', null, 'Social Studies'),
  ('Painting', null, 'Arts'),
  ('Biology', null, 'Science'),
  ('Typing', 'Keyboarding without Tears', 'Computer Science');

INSERT INTO curricula 
  (title, subject_id)
VALUES
  ('Leap Into Reading', 1),
  ('Right Start Math', 3),
  ('Generation Genius', 7),
  ('DK Biology', 7), 
  ('Life of Fred', 3),
  ('Keyboarding without Tears', 8),
  ('Big Life Journal', 5);

INSERT INTO assignments 
  (title, curricula_id, subject_id, grade, this_week, completed)
VALUES
  ('Worksheet 1', 3, 2, 1, true, false),
  ('I have big feelings', 2, 4, 1, true, false),
  ('Level 2', 3, 6, 2, false, false),
  ('Chemical and Physical Changes', 7, 3, 3, true, true);

  
INSERT INTO students 
  (last_name, first_name, grade)
VALUES
('Duck', 'Daffy', 1),
('Fudd', 'Elmer', 2),
('Bunny', 'Bugs', 3),
('Coyote', 'Wily', 4);