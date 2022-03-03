const Guilded = require('./src');

const id = '';
const token = '';

const client = new Guilded.Client().login(token);

client.on('open', () => {
    console.log('Connected to Guilded!');
});

client.on('close', () => {
    console.log('Disconnected from Guilded!');
})

client.on('message', async (interaction) => {
    const message = Guilded.message.entity(interaction);

    console.log(message);
    if (message.content === 'ping') {
        await Guilded.message.send({ token, id, message, content: 'Pong !!!' });
    }

    Guilded.message.fetch({ token, id, message }).then((response) => {
        console.log(response);
    })

});