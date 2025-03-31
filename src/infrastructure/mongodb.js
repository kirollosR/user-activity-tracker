const mongoose = require('mongoose');
const Activity = require('../domain/activity');

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/user-activity';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const saveActivity = (data) => Activity.create(data);

module.exports = { saveActivity, Activity };