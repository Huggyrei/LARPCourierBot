"use strict";
const Discord = require('discord.js');                           

module.exports = class GameManager
{
    constructor(){
        this.initialised=false; this.GMChannel=undefined;   this.parObj=undefined;  this.GMRoleID=undefined;
        this.guild=undefined;    this.clientID=undefined;   this.prefix="_"; 
    }
    msgHandler(msg, clientID){
        if(msg.content.startsWith(this.prefix)&&(msg.guild===this.guild||this.initialised===false))
        {
            var msgcontent = (msg.content.startsWith(this.prefix) ? msg.content.substring(this.prefix.length) : msg.content);
            var spFind = msgcontent.indexOf(' '); var msgInfo = "";
            if(spFind !== -1){msgInfo=msgcontent.substring(spFind+1); msgcontent=msgcontent.substring(0,spFind)}
            switch(msgcontent.toLowerCase()){
                case 'prefix': this.setPrefix(msg, msgInfo); break;
                case 'setup': this.setup(msg, clientID); break;
                case 'claim': this.claimCharacter(msg); break;
                case 'gm': this.sendGMMsg(msg, msgInfo); break;
            }
        }
    }

    setPrefix(msg, newPrefix){
        if(msg.member===undefined){msg.reply("ERROR: you are not on a guild"); return;}
        if(msg.member.roles.cache.find(r => r.name === "GM")){
            this.prefix=newPrefix;
            msg.reply("Prefix changed")
        }else{msg.reply("Error: You need a GM role to change the prefix");}
    }

    async setup(msg, clientID){
        if(msg.member===undefined){msg.reply("ERROR: you are not on a guild"); return;}
        let findGM = msg.member.roles.cache.find(r => r.name === "GM")
        if(findGM!==undefined){
            this.GMRoleID=findGM.id;
            this.initialised=false;
            this.clientID=clientID; this.guild=msg.guild; this.GMChannel=msg.channel; 
            if(this.guild!==undefined){
                this.parObj = this.guild.channels.cache.find(c => c.name == "GM" && c.type == "category");
                if(this.parObj===undefined){
                    try{this.parObj= await this.guild.channels.create("GM",{ type: 'category' });}catch{};
                }
            }
            if(this.parObj!==undefined){this.initialised=true; msg.reply("Bot initialised");} 
            else{msg.reply("Error: Bot not initialised");}
        }else{msg.reply("Error: You need a GM role to initialise the bot");}
    }

    async claimCharacter(msg){
        if(this.initialised===false){msg.reply("ERROR: Bot not initialised");}
        let permArr = [{id: msg.author.id, allow: ['VIEW_CHANNEL'],}];
        permArr.push({id: this.guild.id, deny: ['VIEW_CHANNEL'],});
        permArr.push({id: this.clientID, allow: ['VIEW_CHANNEL'],});
        permArr.push({id: this.GMRoleID, allow: ['VIEW_CHANNEL'],});
        try{await this.guild.channels.create('bot_'+this.getAuthorName(msg),{
            type: 'Text', parent: this.parObj.id, permissionOverwrites: permArr,
        });}catch{
            try{await this.guild.channels.create('bot_'+this.getAuthorName(msg),{
                type: 'Text', permissionOverwrites: permArr,
        });}catch{msg.reply("ERROR: Could not create new channel");}}   
    }

    sendGMMsg(msg, msgInfo){
        if(this.initialised===false){msg.reply("ERROR: Bot not initialised");return;}
        try{
            this.GMChannel.send(this.getAuthorName(msg) + ": " + msgInfo)
        }catch(error){console.log(error); msg.reply("ERROR: Message did not send"); return;};
        msg.reply("Message sent to GM channel");
    }

    getAuthorName(msg)
    {
        return msg.member===undefined ? msg.author.username : (msg.member.nickname===null ? msg.author.username : msg.member.nickname);
    }
}
