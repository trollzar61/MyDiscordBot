var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

//Help List
var helpCommand = "JoJo";
var commands = ["`Yoshikage`", "`Dio`", "`Jotaro`"];
var list = "Yare yare.. So you wanna make use of me? Just type in `"+helpCommand+"` followed by a command from below.\n\n" +
    "These are my commands:\n";
list += commands;

//Command values
var kira = "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. " +
    "I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. " +
    "I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. " +
    "After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. " +
    "Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. " +
    "I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night." +
    " That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.";
this si just bullshit lmaowsss

var dioList = ["Oh? You're Approaching Me?", "WRYYYYYYYYYYY!!!", "MUDA MUDA MUDA MUDAAAAAAA!!", "ZA WARUDO!", "But it was me, Dio!"];

//Functions for random value
function getRndmDio() {
    return dioList[Math.floor(Math.random() * dioList.length)];
}
var jotaroList = ["Yare yare daze...", "ORA ORA ORA ORA ORRRAAAA!!", "Star Platinum! ||Za Warudo!||", "I can't beat the shit out of you without gettign closer"];
function getRndmJotaro() {
    return jotaroList[Math.floor(Math.random() * jotaroList.length)];
}

//Bot going online
bot.on('ready', function (evt) {
    console.log('Yare yare daze.. You are connected!');
});

//Main switch statement for execution fo commands
bot.on('message', function (user, userID, channelID, message, evt) {
    //Alternative BELOW
    // console.log(message.substring(6).split(' '));
    // console.log(message.substring(0,5).substring(5).split(' ')[0]);
    if (message.substring(0, 4) === helpCommand) {
        var cmd = message.substring(5);
        switch (cmd) {
            case 'Yoshikage':
                bot.sendMessage({
                    to: channelID,
                    message: kira
                });
                break;
            case 'Dio':
                bot.sendMessage({
                    to: channelID,
                    message: getRndmDio()
                });
                break;
            case 'Jotaro':
                bot.sendMessage({
                    to: channelID,
                    message: getRndmJotaro()
                });
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: list
                });
                break;
        }
    }
});