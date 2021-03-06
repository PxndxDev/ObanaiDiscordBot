const { ActivityType } = require("discord.js");

module.exports = {
	name: "ready",
	once: true,
	async run(client) {
		client.log(`Bot connecté en tant que ${client.user.tag} !`);
		client.user.setPresence({ activities: [{ name: `version ${client.version}`, type: ActivityType.Watching }], status: "online" });

		await client.internalServerManager.sync_p2p();
	},
};