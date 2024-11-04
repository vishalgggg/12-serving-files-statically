const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const controller = require('../controller/contactus');
const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', controller.contactuscontroller );

// /admin/add-product => POST
router.post('/contactus', controller.contactuscontrollerpost);

module.exports = router;
