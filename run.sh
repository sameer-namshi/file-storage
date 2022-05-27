#!/bin/sh
if [ "$NODE_ENV" = "dev" ]; then
  nodemon -e js,html,yaml index.js
else
  node server.js
  node ./crons/index.js
fi
