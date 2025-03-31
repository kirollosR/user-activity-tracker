const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new mongoose.Schema({
  userId: { type: String, index: true },
  action: String,
  page: String,
  processedAt: { type: Date, index: true },
});

module.exports = mongoose.model('user-activity', activitySchema);