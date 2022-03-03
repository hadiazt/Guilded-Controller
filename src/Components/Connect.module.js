const WebSocket = require('ws');

module.exports = (token) => {

    const socket = new WebSocket('wss://api.guilded.gg/v1/websocket', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    socket.on('open', function () {
        console.log('Connected To Guilded!');
    });

    socket.on('close', function clear() {
        socket.terminate();
    })

}

