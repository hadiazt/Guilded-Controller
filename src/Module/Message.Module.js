const axios = require('axios');
const Client = require('./Client.Module');

module.exports.entity = (Interaction) => {
    const interaction = JSON.parse(Interaction);

    return {
        id: interaction?.d?.message?.id,
        type: interaction?.d?.message?.type,
        content: interaction?.d?.message?.content,
        serverId: interaction?.d?.message?.serverId,
        channelId: interaction?.d?.message?.channelId,
        isPrivate: interaction?.d?.message?.isPrivate,
        createdAt: interaction?.d?.message?.createdAt,
        createdBy: interaction?.d?.message?.createdBy
    }
}

module.exports.send = async ({ token, id, message, content }) => {

    if (message.createdBy === id || message.id === id || !message?.channelId) {
        return;
    }
    if (!content) {
        console.log('Can not send an empty message');
    }

    return axios(`https://www.guilded.gg/api/v1/channels/${message?.channelId}/messages`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data: { content }
    });
}


