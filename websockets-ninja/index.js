const express = require('express');
const socket = require('socket.io');

//App setup
const app = express();
const server = app.listen(4000, () => {
    console.log('Listening to requests on port 4000');
});

//Static files
app.use(express.static('public'));

//Socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', (data) => {
        console.log(data.message);
        io.sockets.emit('chat', data);
    });

    socket.on('typing', handle => {
        socket.broadcast.emit('typing', handle);
    });
});