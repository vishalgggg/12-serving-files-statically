const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

// /admin/add-product => POST
router.post('/contactus', (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'sucess.html'));
  // res.redirect('/success');
});

module.exports = router;
