import Server from './server/server';
import Colors = require('colors.ts');
const server = Server.instance;

// Colors for console log
Colors.theme({
  error: 'red',
  info: 'green',
  warning: "yellow",
  debug: "blue",
});

server.start(() => {
  console.log("Server listening on port: " + `${server.port}`.debug);
});