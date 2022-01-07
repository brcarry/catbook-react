/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// we haven't set up user login yet, so just
// use a hardcoded name for now
// TODO change to a unique name for workshop
const MY_NAME = "Ben Bitdiddle";

// import models so we can interact with the database
const Story = require("./models/story");
const Comment = require("./models/comment")

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

router.get("/stories", (req, res) => {
  Story.find({})
    .then((stories) => res.send(stories));
});

router.post("/story", (req, res) => {
  const newStory = new Story({
    creator_name: MY_NAME,
    content: req.body.content,
  });
  newStory.save().then((story) => res.send(story));
});

router.get("/comment", (req, res) => {

});

router.post("/comment", (req, res) => {

});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});


module.exports = router;
