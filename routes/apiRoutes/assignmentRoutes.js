const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all assignments including data from fk cells
router.get('/assignments', (req, res) => {
    const sql = 
    `SELECT assignments.*, subjects.name AS subject_name, students.name as student_name
    FROM assignments 
    LEFT JOIN subjects ON assignments.subject_id = subjects.id
    LEFT JOIN students ON assignments.student_id = students.id`
    //or is it like this??? or...?
    `SELECT assignments.*, subjects.name AS subject_name,
    FROM assignments 
    LEFT JOIN subjects ON assignments.subject_id = subjects.id`
    `SELECT assignments.*, students.name as student_name
    FROM assignments 
    LEFT JOIN students ON assignments.student_id = students.id`;
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

// Get single assignment including data from fk cells
router.get('/assignments/:id', (req, res) => {
    const sql = `SELECT assignments.*, subjects.name AS student_name, students.name as student_name
    FROM assignments 
    LEFT JOIN subjects ON assignments.subject_id = subjects.id
    LEFT JOIN students ON assignments.student_id = students.id
    WHERE assignment.id = ?`;
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

  // Get all assignments by subject including data from fk cells
router.get('/assignments/:subject', (req, res) => {
  const sql = 
  `SELECT assignments.*, subjects.name 
  AS subject_name students.name AS student_name
  FROM assignments 
  LEFT JOIN subject ON assignments.subject_id = subjects.id student ON assignments.student_id = students.id
  WHERE subject.id =?`;
  const params = [req.params.id];
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

// Delete an assignment
router.delete('/assignment/:id', (req, res) => {
    const sql = `DELETE FROM assignments WHERE id = ?`;
    db.query(sql, req.params.id, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Assignment not found'
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
