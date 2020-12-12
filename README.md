# LARPCourierBot
Discord bot for sending up private channels and sending messages to the GM.
To download the code from Github, just click 'Code' followed by 'Download Zip'

## Using the Bot
This Bot receives only 4 instructions. Note: the bot is intended for use in only a single server at any given time. Any messages from a server it hasn't been currently setup for will be ignored.
- \_setup: When you first run the bot, use this command in the GM channel. The bot will set itself up to send any GM messages to this channel. You can only run this command if you have a role called "GM"
- \_claim: When the bot has been set up, players can use this command to have the bot create a private channel for them under a parent category "GM". Only the player, the bot, and anyone with the "GM" role can see this channel.
- \_gm _message:_ Players can use this command to send a message to the GMs. The bot will post the message in the GM channel, along with the server name of the user who the message.
- \_prefix _newPrefix_: If you don't like the default prefix, which is an underscore, you can change it with this command. Don't forget to let your players know how to use the commands; you will need to change the underscore for the new prefix.

## Creating a Bot
If you want to use this code for your game, you will need to create your own bot application. You will need to take the following steps:
1. Copy this code repository into the folder you want to run it from
2. Go to https://discord.com/developers/applications
3. Click on 'New Application' in thr top right of the Applicatipns list
4. Name it and set the icon for your bot
5. In your new application, click 'Add Bot'
6. Click on 'Click to Reveal Token' and then copy this
7. Go to the folder with the code and open Index.js (you can do this in notepad)
8. At the bottom of the file is the line "client.login('xxx');" replace xxx with the bot's token you've just copied (keep the single quote marks!). Save the file.
9. You need some way to install the Javascript libraries; I suggest installing Node from https://nodejs.org/en/download/.  You can then open a Node command prompt and enter "cd [folder address]" with the address of your new folder containing the bot code. This should navigate the command prompt to your folder. You should then enter the command 'npm install' to set up the libraries.

## Running the Bot

1. Under '0Auth2', go to the list of scopes and click 'bot'. This will cause a URL to be generated above the scopes. Copy that URL and click on it to invite the bot into your server
8. You need some way to run a Javascript file. I did this by installing Node. You can then open a Node command prompt, enter "cd [folder address]" with the address of your new folder containing the bot code, then enter the command 'Node Index' to run the Index file

Note that if the code is not currently being run somewhere, the bot won't function. You can just run it on your own computer if you're happy with them not working when you're not online, otherwise you'll need to find a server to keep it going.
