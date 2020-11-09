const chalk = require('chalk')
const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/mevnStack';
const db = monk(connectionString);
db.then(() => {
  console.log(chalk.green("[info] Connected to database"))
})
module.exports = db;