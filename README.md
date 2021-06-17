MortalKombat learning game with NodeJS API

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

_Don't forget to add the folder with **node_modules**_
