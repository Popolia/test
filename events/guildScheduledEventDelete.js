const { Events, User } = require('discord.js');
const interactdiscordeventcommand = require('../classes/InteractionDiscordEventcommand');

module.exports = {
	name: Events.GuildScheduledEventDelete,
	execute(interaction) {
        console.log(interaction)
        const interactiondiscordevcom = new interactdiscordeventcommand()
        interactiondiscordevcom.recupererEvenementListe(interaction)
	},
};
