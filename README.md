## MortalKombat 
learning game with server API on NodeJS.
It is text game with gif pictures, not real one.

Deployed at: https://mortal-kombat-with-api.herokuapp.com/

Game front-end Made during JS Zar Maraphon.

I added server part on NodeJS providing API and players assets.
Server-part is based on page + API example from https://github.com/Shalamnik/metanit-webapp

Front-end:
* The initial page in *public/index.html*.
* The main gaming page in *public/arenas.html*
* The main JS file *webapp/public/main.js*

Back-end:
* Routes, modules are configured in *app.js*;
* Players are  *player.json*;

API
* /api/mk/players - provides list of players
* /api/mk/player/choose - provides one random player
* /api/mk/player/fight - provides games login based on hit and defence (where player hits and what player defences)

### How to play:
1. Choose your fighter first
2. Each time choose part of the body to hit, part of the body do defend, then click Fight.
3. Opponent randomly hit your player and protect himself. You see result in health bar and in comments.
Good luck!

![game_screenshot](https://user-images.githubusercontent.com/7703384/147382337-39a89fa4-2cbb-4e30-99f9-e457072fca93.png)
