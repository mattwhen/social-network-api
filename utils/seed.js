const connection = require('../config/connection');
const { User, Application } = require('../models');
const { getRandomUserName, getRandomApplications, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
//   await Application.deleteMany({});
// DROP EXISTING USERS
  await User.deleteMany({});

  // Create empty array to hold users
  const users = [];
//   const applications = getRandomApplications(10);

  for (let i = 1; i <= 20; i++) {
    const username = getRandomUserName();
    const email = getRandomEmail();
    console.log(email);
    // const fullName = getRandomUserName();
    // const first = fullName.split(' ')[0];
    // const last = fullName.split(' ')[1];

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
//   await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
//   console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
