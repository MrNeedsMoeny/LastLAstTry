const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { 
console.log("I am ready!");
     
 
        
    });
         const prefix = ".";
         client.on("message", (message) => {
         if (message.content.startsWith(prefix + "whoisting"))
          message.channel.send({embed: {
  color: 3447003,
  description: "LordTing: The only Ting we know !"
          
          }});
        
         
            if (message.content.startsWith(prefix + "card")) {
            var card = Math.floor(Math.random() * 52) + 1;
            if (card === 1) {
                message.channel.send("Two of Spades");
            }


            if (card === 2) {
                message.channel.send("Ace of Spades");
            }

            if (card === 3) {
                message.channel.send("Three of Spades");
            }


           if (card === 4) {
                message.channel.send("Four of Spades");
            }

            if (card === 5) {
                message.channel.send("Five of Spades");
            }

            if (card === 6) {
                message.channel.send("Six of Spades");
            }

            if (card === 7) {
                message.channel.send("Seven of Spades");
            }

            if (card === 8) {
                message.channel.send("Eight of Spades");
            }

            if (card === 9) {
                message.channel.send("Nine of Spades");
            }

            if (card === 10) {
                message.channel.send("Ten of Spades");
            }

            if (card === 11) {
                message.channel.send("Jack of Spades");
            }

            if (card === 12) {
                message.channel.send("Queen of Spades");
            }

            if (card === 13) {
                message.channel.send("KIng of Spades");
            }
            
            if (card === 14) {
                message.channel.send("Ace of Hearts");
            }

            if (card === 15) {
                message.channel.send("Two of Hearts");
            }

            if (card === 16) {
                message.channel.send("Three of Hearts");
            }

            if (card === 17) {
                message.channel.send("Four of Hearts");
            }

            if (card === 18) {
                message.channel.send("Five of Hearts");
            }

            if (card === 19) {
                message.channel.send("Six of Hears");
            }

            if (card === 20) {
                message.channel.send("Seven of Hearts");
            }

            if (card === 21) {
                message.channel.send("Eight of Hearts");
            }

            if (card === 22) {
                message.channel.send("Nine of Hearts");
            }

            if (card === 23) {
                message.channel.send("Ten of Hearts");
            }

            if (card === 24) {
                message.channel.send("Jack of Hearts");
            }

            if (card === 25) {
                message.channel.send("Queen of Hearts");
            }

            if (card === 26) {
                message.channel.send("King of Hearts");
            }

            if (card === 27) {
                message.channel.send("Ace of Diamonds");
            }
            if (card === 28) {
                message.channel.send("Two of Diamonds");
            }

            if (card === 29) {
                message.channel.send("Three of Diamonds");
            }

            if (card === 30) {
                message.channel.send("Four of Diamonds");
            }
            if (card === 31) {
                message.channel.send("King Of Clubs");
            }

            if (card === 32) {
                message.channel.send("Five of Diamonds");
            }

            if (card === 33) {
                message.channel.send("Six of Diamonds");
            }

            if (card === 34) {
                message.channel.send("Seven of Diamonds");
            }

            if (card === 35) {
                message.channel.send("Eight of Diamonds");
            }

            if (card === 36) {
                message.channel.send("Nine of Diamonds");
            }

            if (card === 37) {
                message.channel.send("Ten of Diamonds");
            }

            if (card === 38) {
                message.channel.send("KIng of Diamonds");
            }

            if (card === 39) {
                message.channel.send("Queen of Diamonds");
            }

            if (card === 40) {
                message.channel.send("Jack of Diamonds");
            }

            if (card === 41) {
                message.channel.send("Ace of Clubs");
            }

             

            if (card === 42) {
                message.channel.send("Two of Clubs");
            }

           
            if (card === 43) {
                message.channel.send("Three of Clubs");
            }

            if (card === 44) {
                message.channel.send("Four of Clubs");
            }

            if (card === 45) {
                message.channel.send("Five of Clubs");
            }

            if (card === 46) {
                message.channel.send("Six of Clubs");
            }

            if (card === 47) {
                message.channel.send("Seven of Clubs");
            }

            if (card === 48) {
                message.channel.send("Eight of Clubs");
            }

            if (card === 49) {
                message.channel.send("Nine of Clubs");
            }

            if (card === 50) {
                message.channel.send("Ten of Clubs");
            }

            if (card === 51) {
                message.channel.send("Jack of Clubs");
            }

            if (card === 52) {
                message.channel.send("Queen of Clubs");
            }
            
        }
        
   if (message.content.startsWith(prefix + "flipacoin")) {

    var card = Math.floor(Math.random() * 2) + 1;

    if (card === 1) {

        message.channel.send("Heads");

    }

    if (card === 2) {

        message.channel.send("Tails");

     }

   }
         }
         
 });
       
   

 client.login(process.env.BOT_TOKEN);
