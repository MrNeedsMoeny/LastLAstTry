const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { 
console.log("ready");
   
});
         


 const prefix = "."; 


 
 client.on('message', message => {



    if (message.content === prefix +'help') {
    	message.reply('Heres a list of commands: .card, .flipacoin, .staff, .ting memes and .whoisting');

    }

});  
  
client.on('message', message => {

    if (message.content === prefix +'') {
    	message.reply('LordTing: The only ting we know and want to know');
    }
});   
       client.on('message', message => {

            if (message.content.startsWith(prefix + "card")){
            var card = Math.floor(Math.random() * 52) + 1;
            if (card === 1) {
                message.reply("Two of Spades");
            }


            if (card === 2) {
                message.reply("Ace of Spades");
            }

            if (card === 3) {
                message.reply("Three of Spades");
            }


           if (card === 4) {
                message.reply("Four of Spades");
            }

            if (card === 5) {
                message.reply("Five of Spades");
            }

            if (card === 6) {
                message.reply("Six of Spades");
            }

            if (card === 7) {
                message.reply("Seven of Spades");
            }

            if (card === 8) {
                message.reply("Eight of Spades");
            }

            if (card === 9) {
                message.reply("Nine of Spades");
            }

            if (card === 10) {
                message.reply("Ten of Spades");
            }

            if (card === 11) {
                message.reply("Jack of Spades");
            }

            if (card === 12) {
                message.reply("Queen of Spades");
            }

            if (card === 13) {
                message.reply("King of Spades");
            }
            
            if (card === 14) {
                message.reply("Ace of Hearts");           
            }

            if (card === 15) {
                message.reply("Two of Hearts");
            }

            if (card === 16) {
                message.reply("Three of Hearts");
            }

            if (card === 17) {
                message.reply("Four of Hearts");
            }

            if (card === 18) {
                message.reply("Five of Hearts");
            }

            if (card === 19) {
                message.reply("Six of Hears");
            }

            if (card === 20) {
                message.reply("Seven of Hearts");
            }

            if (card === 21) {
                message.reply("Eight of Hearts");
            }

            if (card === 22) {
                message.reply("Nine of Hearts");
            }

            if (card === 23) {
                message.reply("Ten of Hearts");
            }

            if (card === 24) {
                message.reply("Jack of Hearts");
            }

            if (card === 25) {
                message.reply("Queen of Hearts");
            }

            if (card === 26) {
                message.reply("King of Hearts");
            }

            if (card === 27) {
                message.reply("Ace of Diamonds");
            }
            if (card === 28) {
                message.reply("Two of Diamonds");
            }

            if (card === 29) {
                message.reply("Three of Diamonds");
            }

            if (card === 30) {
                message.reply("Four of Diamonds");
            }
            if (card === 31) {
                message.reply("King Of Clubs");
            }

            if (card === 32) {
                message.reply("Five of Diamonds");
            }

            if (card === 33) {
                message.reply("Six of Diamonds");
            }

            if (card === 34) {
                message.reply("Seven of Diamonds");
            }

            if (card === 35) {
                message.reply("Eight of Diamonds");
            }

            if (card === 36) {
                message.reply("Nine of Diamonds");
            }

            if (card === 37) {
                message.reply("Ten of Diamonds");
            }

            if (card === 38) {
                message.reply("KIng of Diamonds");
            }

            if (card === 39) {
                message.reply("Queen of Diamonds");
            }

            if (card === 40) {
                message.reply("Jack of Diamonds");
            }

            if (card === 41) {
                message.reply("Ace of Clubs");
            }

             

            if (card === 42) {
                message.reply("Two of Clubs");
            }

           
            if (card === 43) {
                message.reply("Three of Clubs");
            }

            if (card === 44) {
                message.reply("Four of Clubs");
            }

            if (card === 45) {
                message.reply("Five of Clubs");
            }

            if (card === 46) {
                message.reply("Six of Clubs");
            }

            if (card === 47) {
                message.reply("Seven of Clubs");
            }

            if (card === 48) {
                message.reply("Eight of Clubs");
            }

            if (card === 49) {
                message.reply("Nine of Clubs");
            }
            if (card === 50) {
                message.reply("Ten of Clubs");
            }

            if (card === 51) {
                message.reply("Jack of Clubs");
            }

            if (card === 52) {
                message.reply("Queen of Clubs");
            }
            
        }
        
   if (message.content.startsWith(prefix + "flipacoin")) {

    var coin = Math.floor(Math.random() * 2) + 1;

    if (coin === 1) {      
        message.reply("Heads");

    }

    if (coin === 2) {

        message.reply("Tails");

     }

   }
        
              if (message.content.startsWith(prefix + "staff")) {

              var tate = Math.floor(Math.random() * 1) + 1;


    if (tate === 1) {

 message.reply("MrNeedsMoney, M&M, Rw20x, Swag, JonnyBear");

    }

} 
       
          
             
             
 });
       
   

 client.login(process.env.BOT_TOKEN);
