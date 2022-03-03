const WebSocket = require('ws');

class ClientModule
{
    login(token)
    {
        this.connection = new WebSocket('wss://api.guilded.gg/v1/websocket',
            {
                headers:
                    {
                        Authorization: `Bearer ${token}`
                    }
            });

        return this.connection;
    }
}

module.exports = ClientModule;