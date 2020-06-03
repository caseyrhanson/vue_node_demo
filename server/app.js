// Step 1: import+init each pkg we installed.
const app = require('express')();
//const http    = require("http").Server(app);
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// 2. Global objects persist as long as app.js runs (state should be in DB).
var state = { x: 200, y: 200 };
var port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

// Step 3. Start listening on port 3000
http.listen(port, () => console.log('Listening on :3000'));

// io broadcasts to all and conn,state,move are all just string ids
io.on('connection', (sock) => {
	console.log('a user connected');
	// sock broadcasts to a single
	sock.emit('state', state);
	sock.on('move', (data) => {
		let d = data.toUpperCase();
		state.x +=
				d == 'L' ? -5 :
				d == 'R' ? 5 :
				0;
		state.y +=
				d == 'U' ? -5 :
				d == 'D' ? 5 :
				0;
		io.emit('state', state);
	});
});