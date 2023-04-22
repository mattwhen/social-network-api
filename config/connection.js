const mongoose = require('mongoose');


// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

mongoose.connect(connectionString, () => {
    console.log('Success!');
    
}, err => console.err('Error connecting to db', err));

// Export connection
module.exports = mongoose; 