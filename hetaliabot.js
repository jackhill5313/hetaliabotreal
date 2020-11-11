const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Hetalia: World Stars", { type: "WATCHING" });
});

// WELCOME MESSAGE WHEN USER HAS ACCEPTED THE RULES // 

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(".iam newts")) {
    if (!message.author.bot) {
      if (message.channel.name === "entry") {
        let member = message.member;
        let role = message.guild.roles.cache.find(r => r.name === "newts");

        member.roles.add(role.id)

        
      }
    }
  }
  
  if (message.content.toLowerCase().startsWith(".iam newts")) {
    
    if (!message.author.bot) {
      if (message.channel.name === "entry") {
        let guild = message.guild;
        const channel = message.guild.channels.cache.find(
    channel =>
      channel.id === "265571754393468928"
  );

      channel.send(`<@${message.author.id}>, welcome!`)
      let embed = new Discord.MessageEmbed()
      .setAuthor(`Welcome to the server, ${message.author.tag}`, message.author.displayAvatarURL())
      .setColor('#7ba3ff')
      .setDescription(`<@${message.author.id}> just joined the discord! Make sure to fill out an <#423069581460897793> and get some <#759849308739731537> whenever!`)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
      .setFooter("PM PierreBot with any questions!")
        
        client.channels.cache.get('265571754393468928').send(embed)
        
      }
    }
  }
});



// THIS IS ALL PING PONG STUFF DOWN HERE

client.on("message", async message => {
  if (message.content.toLowerCase().includes("hewwo")) {
    try {
      await message.react("603684184682397727");
      await message.react("🇵");
      await message.react("🇪");
      await message.react("🇷");
      await message.react("🇮");
      await message.react("🇸");
      await message.react("🇭");
    } catch (err) {
      console.log(err);
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else if (message.content.startsWith("florida")) {
    message.channel.send(":crocodile: :palm_tree:");
  }
});

//CHAT REACTIONS

client.on("message", message => {
  if (message.content.includes("whos a good boi")) {
    message.channel.send("me!! :heart:");
  }

  if (message.content.includes("good morning")) {
    message.channel.send("https://pbs.twimg.com/media/CvIUqUPUAAAGKEg.jpg");
  }

  if (message.content.includes("good night")) {
    message.channel.send(
      "http://s2.storage.akamai.coub.com/get/b19/p/coub/simple/cw_timeline_pic/30ccab81aae/01bf7c4bc51b8db5adcde/ios_large_1475540748_image.jpg"
    );
  }

  if (
    message.content
      .toLowerCase()
      .includes(
        "alfred, whats one of the most terrifying things youve seen here on the internet?"
      )
  ) {
    message.channel.send(
      "https://cdn.discordapp.com/attachments/265571232185843723/462644008020213760/unknown.png"
    );
  }

  if (message.content.includes("goodnight")) {
    message.channel.send(
      "http://s2.storage.akamai.coub.com/get/b19/p/coub/simple/cw_timeline_pic/30ccab81aae/01bf7c4bc51b8db5adcde/ios_large_1475540748_image.jpg"
    );
  }

  if (message.content.startsWith("fight me bitch")) {
    message.channel.send(":muscle::eyes::muscle:");
  }

  if (message.content.startsWith("asl")) {
    message.channel.send("241/Country/USA");
  }

  if (message.content.includes("╯°□°）╯︵ ┻━┻")) {
    message.channel.send("┬─┬ ノ( ゜-゜ノ)");
  }

  if (message.content.includes("sad")) {
    message.channel.send("i love you!");
  }

  if (message.content.startsWith("*shrugs*")) {
    message.channel.send(" ¯\\_(ツ)_/¯ ");
  }

  if (message.content.includes("good boi") && message.content.includes("al")) {
    message.channel.send("( ͡° ᴥ ͡°)");
  }

  if (
    message.content.includes("good boi") &&
    message.content.includes("alfie")
  ) {
    message.channel.send("( ͡° ᴥ ͡°)");
  }

  if (
    message.content.includes("good boi") &&
    message.content.includes("alfred")
  ) {
    message.channel.send("(◡‿◡✿)");
  }

  if (message.content.includes("depressed")) {
    message.channel.send("i love you!");
  }

  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("joe")
  ) {
    message.channel.send(":eyes:");
  }
});

//heroku stay online thing
var http = require("http");
setInterval(function() {
  http.get("http://hetaliabot2.herokuapp.com");
}, 900000);

// DMS TO ME
client.on("message", message => {
  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("allan")
  ) {
    client.users.get("264945356884672524").sendMessage("hoseph mention");
  }

  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("oliver")
  ) {
    client.users.get("264945356884672524").sendMessage("oli kirklunn mention");
  }

  if (message.content.includes("vore")) {
    client.users.get("264945356884672524").sendMessage("***RAT JAIL***");
  }

  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("2p america")
  ) {
    client.users.get("264945356884672524").sendMessage("al mention");
  }

  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("2p england")
  ) {
    client.users.get("264945356884672524").sendMessage("oli kirklun mention");
  }

  if (message.content.includes("veggie burgers")) {
    client.users.get("264945356884672524").sendMessage("vb mention");
  }

  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("nazi")
  ) {
    client.users.get("264945356884672524").sendMessage("idea mention");
  }
  if (
    message.author.id !== "264945356884672524" &&
    message.content.includes("hitler")
  ) {
    client.users.get("264945356884672524").sendMessage("moustache man mention");
  }
});

// DMS to OTHERS

client.on("message", message => {
  if (
    message.author.id !== "317540893282271234" &&
    message.content.includes("luxembourg")
  ) {
    client.users.get("317540893282271234").sendMessage("lulu mention");
  }
});

//STATE REACTIONS

client.on("message", message => {
  if (message.content.toLowerCase().includes("texas")) {
    message.channel.send(":cowboy:");
  }
});

client.on("message", message => {
  if (message.content.toLowerCase().includes("new jersey")) {
    message.channel.send(":blueberries:");
  }

  if (message.content.toLowerCase().includes("georgia")) {
    message.channel.send(":smiling_imp: :violin:");
  }
});

// MATH REACTIONS

client.on("message", message => {
  if (message.content.includes("roll die")) {
    var choices = ["1", "2", "3", "4", "5", "6"];
    var response = choices[Math.floor(Math.random() * 6)];
    message.channel.send(" :sweat_drops:" + response);
  }

  if (message.content.includes("dnd20")) {
    var choices = [
      "17",
      "16",
      "15",
      "20",
      "18",
      "19",
      "14",
      "13",
      "12",
      "11",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1"
    ];
    var response = choices[Math.floor(Math.random() * 20)];
    message.channel.send(" :sweat_drops:" + response);
  }

  if (message.content.includes("rock paper scissors")) {
    var choices = ["rock", "paper", "scissors"];
    var response = choices[Math.floor(Math.random() * 3)];
    setTimeout(function() {
      message.channel.send(" :heart: I choose " + response);
    }, 10000);
  }

  if (
    message.content.toLowerCase().includes("romano bot") ||
    message.content.toLowerCase().includes("romanobot") ||
    message.content.toLowerCase().includes("romabot") ||
    message.content.toLowerCase().includes("roma bot")
  ) {
    var choices = [
      "yeah.. i owe him .3 BTC but i spent .1 BTC on mcdonalds last week so im a bit short... :thinking:",
      "I sent him an IOU but I think he just deleted it..",
      "I tried to pay him back in coupons to olive garden and he sent me malware",
      "I know him!",
      "i told him about pineapple pizza once... he gave me a glitch after that",
      "Pizza, pasta, put it in a box-"
    ];
    var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
  }
});

client.login(process.env.FUCKYOUNAZIS);
