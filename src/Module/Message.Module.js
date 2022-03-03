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


