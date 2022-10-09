const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all assignments
router.get('/assignments', (req, res) => {
    const sql = `SELECT * FROM assignments`;
  
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

// Get single assignment
router.get('/assignments/:id', (req, res) => {
    const sql = `SELECT * FROM assignments WHERE id = ?`;
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

// Update assignment to complete/incomplete
router.update('/assignment/:id', (req, res) => {
  const sql = `UPDATE assignments SET completed = 1 WHERE id=?`;
  db.querry(sql, req.params.id, (err, result) => {
    if(err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Assignment not found'
      });
    } else {
      res.json({
        message: 'updated',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;
