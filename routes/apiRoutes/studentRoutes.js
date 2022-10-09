const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all students alphabetized by last name
router.get('/students', (req, res) => {
  const sql = `SELECT * FROM students ORDER BY last_name`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get all students listed by grade (will this work, router route?)
router.get('/students/:grade', (req, res) => {
    const sql = `SELECT * FROM students ORDER BY grade`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

// Get single student
router.get('/student/:id', (req, res) => {
  const sql = `SELECT * FROM students WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Create a student
router.post('/student', ({ body }, res) => {
  const sql = `INSERT INTO students (last_name, first_name, grade) VALUES (?,?,?)`;
  const params = [body.last_name, body.first_name, body.grade];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Update a student's grade
router.put('/student/:id', (req, res) => {
  const sql = `UPDATE students SET grade = ? WHERE id = ?`;
  const params = [req.body.grade, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Student not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Delete a student
router.delete('/student/:id', (req, res) => {
  const sql = `DELETE FROM students WHERE id = ?`;
  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Student not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;
