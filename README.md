# LARPCourierBot
Discord bot for sending up private channels and sending messages to the GM.
To download the code from Github, just click 'Code' followed by 'Download Zip'

## Using the Bot
This Bot receives only 4 instructions.
- a
- b



1. Go to https://discord.com/developers/applications
2. Click on 'New Application' in thr top right of the Applicatipns list
3. Name it and set the icon; I've provided the one I use in the folder
3. In your new application, click 'Add Bot'
4. Click on 'Click to Reveal Token' and then copy this
5. Go to the folder with the code and open Index.js (you can do this in notepad)
6. At the bottom of the file is the line "client.login('tokenID');" replace tokenID with the bot's token you've just copied (keep the single quote marks!). Save this somewhere
7. Under '0Auth2', go to the list of scopes and click 'bot'. This will cause a URL to be generated above the scopes. Copy that URL and click on it to invite the bot into your server
8. You need some way to run a Javascript file. I did this by installing Node. You can then open a Node command prompt, enter "cd [folder address]" with the address of your new folder containing the bot code, then enter the command 'Node Index' to run the Index file

Note that if the code is not currently being run somewhere, the bot won't function. You can just run it on your own computer if you're happy with them not working when you're not online, otherwise you'll need to find a server to keep it going.
