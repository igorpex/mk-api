const express = require("express");
const fs = require("fs");

const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + "/public"));

const getRandom = (base) => {
  return Math.ceil(Math.random() * base);
}

//attack powers
const HITPOWERS = {
  head: 30,
  body: 25,
  foot: 20,
};

//body areas
const BODYAREAS = ['head', 'body', 'foot'];

//provide list of players
app.get("/api/mk/players", function (req, res) {

  let content = fs.readFileSync("players.json", "utf8");
  let players = JSON.parse(content);
  res.send(players);
});

app.get("/api/mk/player/choose", function(req, res) {
  let content = fs.readFileSync("players.json", "utf8");
  let players = JSON.parse(content);

  let randomId = Math.ceil(Math.random() * (players.length - 1));
  let player = players[randomId];
  res.send(player);
});

app.post("/api/mk/player/fight", jsonParser, function (req, res) {
  
  if (!req.body) res.sendStatus(400);
  let hit = req.body.hit;
  let defence = req.body.defence;
  let player1 = {
    hit,
    defence,
    value: getRandom(HITPOWERS[hit]),
  }

  let player2 = {
    hit: BODYAREAS[getRandom(BODYAREAS.length) - 1],
    defence: BODYAREAS[getRandom(BODYAREAS.length) - 1],
    value: getRandom(HITPOWERS[hit]),
  }

  let fight = {
    player1, 
    player2,
  };

  res.send(fight);

});

app.listen(3000, function() {
  console.log("Server started");
});