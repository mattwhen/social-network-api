# Social Network API

## Description
This project presents the back end functionality of a social media blog where developers can create their own thoughts (posts), react to user's thoughts (👍 or 👎) and create their own friends list, but also giving them the ability to delete any of the previously mentioned functionalities such as the thoughts, reactions, user's from friends list. 

## Technologies used
* <b>MongoDB</b> - A NoSQL document-oriented database. Used to allow scalability, performance, and is more flexible than it's counterpart, SQL or relational databases. 
* <b>Compass</b> - A GUI application that gives us the ability to interact with our database.
* <b>Express</b> - For building our API routes.
* <b>Mongoose</b> - A Object Data Modeling (ODM) library for MongoDB that allows developers to work with MongoDB in a much simpler fashion. 

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
 <br> 

## How to use


## Challenges
Several of the challenges I came across was how to reference the Array of _id values to each of the models and how to create some of the POST routes for example when creating a new thought, we have to push the created thought's _id to the associated user's thoughts array field in the Thought model. 

## Future features
One future implementation is to add logic when a user has a mutual friend on their friend's list. Another is to add logic whenever a friend already exists on a user with a conditional statement stating that this friend already exists on your current friend's list. 


## Live Demo

