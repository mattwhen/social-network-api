const { connect, connection } = require("mongoose");


// Wrap Mongoose around local connection to MongoDB
const connectionString = "mongodb://127.0.0.1:27017/socialDB";

connect(connectionString,
  () => {
    console.log("Success!");
  },
  (err) => console.err("Error connecting to db", err)
);

// Export connection
module.exports = connection;
