import {SlashCommandBuilder} from "discord.js";

module.exports = {
    data : new SlashCommandBuilder()
        .setName("goat")
        .setDescription("Replies with the goat"),
        async execute(interaction){
            await interaction.reply("@krnlz");
    }
}