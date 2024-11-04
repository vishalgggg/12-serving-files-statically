const path = require('path');
const rootDir = require('../util/path');

exports.contactuscontroller = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}
exports.contactuscontrollerpost = (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'sucess.html'));
    // res.redirect('/success');
}