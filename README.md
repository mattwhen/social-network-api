# Social Network API

## Description
This project presents the back end functionality of a social media blog where developers can create their own thoughts (posts), react to user's thoughts (👍 or 👎) and create their own friends list, but also giving them the ability to delete any of the previously mentioned functionalities such as the thoughts, reactions, user's from friends list. 

---

## Technologies used
* <b>MongoDB</b> - A NoSQL document-oriented database. Used to allow scalability, performance, and is more flexible than it's counterpart, SQL or relational databases. 
* <b>Compass</b> - A GUI application that gives us the ability to interact with our database.
* <b>Express</b> - For building our API routes.
* <b>Mongoose</b> - A Object Data Modeling (ODM) library for MongoDB that allows developers to work with MongoDB in a much simpler fashion. 

---

## Installation
The following should be installed onto the user's machine first, for this project to work correctly.


* <b>VS Code</b> (or similar IDE)
* <b>Node.js</b>
* <b>Compass</b> - Application to interact with our Database
* <b>Mongoose</b> - A library installed through NPM
* <b>Insomnia</b> - Application to interact with and test our API routes. Most importantly, how we can add users, create thoughts, add reactions, etc.

Once you have the above applications installed, you can clone the repo to your local machine from my GitHub: https://github.com/mattwhen/social-network-api<br> <br>

We'll need to download our modules/dependencies needed to run this application. In your terminal, cd into the Develop folder and then use the following command in your terminal: <br><br>

```
npm install
```

Then use the command to start up our server:
```
node run start
```

---

## How to use
After starting up our server, we can test our API routes all with the following:

### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`


---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

---

## Graphical User Interface of Insomnia where we test our API routes

![Image of Insomnia GUI](./Screenshot%202023-05-05%20at%201.30.50%20PM.png)

---

## Challenges
Several of the challenges I came across was how to reference the Array of _id values to each of the models and how to create some of the POST routes for example when creating a new thought, we have to push the created thought's _id to the associated user's thoughts array field in the Thought model. 

---

## Future features
One future implementation is to add logic when a user has a mutual friend on their friend's list. Another is to add logic whenever a friend already exists on a user with a conditional statement stating that this friend already exists on your current friend's list. 

Another feature is to add more error handling when testing our routes. Such as, when updating a user, it has to be unique username/email. Right now the server stops running immediately if that does occur, I would add some logic to handle this type of error or authentication that would prevent the server from running if it catches this but just alert in the terminal/Insomnia. 

---

## Live Demo
https://drive.google.com/file/d/1bVcs6RRRd8_3a9YVuYriURC66wkBc_2P/view 
