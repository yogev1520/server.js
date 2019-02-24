// Import the library
const server = require('server');

// Launch the server to always answer "Hello world"
server(ctx => 'https://github.com/yogev1520?tab=repositories');
const mainPage = ("http://localhost:3000/");


    console.log(mainPage);
    server({
        port: 3000,
        public: 'public',
        engine: 'pug',
        env: 'development'   // Remember this is "env" and not "node_env" here
      });

const { get, post } = server.router;
const { render, json } = server.reply;

server([
  get('/', ctx => render('index.hbs')),
  post('/', ctx => json(ctx.data)),
  get(ctx => status(404))
]);





