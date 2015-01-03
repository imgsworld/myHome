var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myhome');
exports.mongoose = mongoose;