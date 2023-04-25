const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUserName, getRandomEmail } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // DROP EXISTING USERS
  await User.deleteMany({});

  // DROP EXISTING THOUGHTS
  await Thought.deleteMany({});

  // Create empty array to hold users
  const users = [];

  for (let i = 1; i <= 20; i++) {
    const username = getRandomUserName();
    const email = getRandomEmail();
    console.log(email);

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
  //   await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
