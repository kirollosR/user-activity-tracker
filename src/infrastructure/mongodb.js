// const mongoose = require('mongoose');
// const Activity = require('../domain/activity');

// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/user-activity';
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// const saveActivity = (data) => Activity.create(data);

// module.exports = { saveActivity, Activity };


const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/user-activity';

mongoose.connect(mongoUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Reduce timeout for faster feedback
});

const activitySchema = new mongoose.Schema({
  userId: { type: String, index: true },
  action: String,
  page: String,
  processedAt: { type: Date, index: true },
});

const Activity = mongoose.model('Activity', activitySchema);

const saveActivity = (data) => Activity.create(data);

module.exports = { saveActivity, Activity };