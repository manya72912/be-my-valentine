let yesButton = document.getElementById('yes-button');
let noButton = document.getElementById('no-button');
let noClicks = 0;

// List of "No" messages to show after the first one
const noMessages = [
    "No! 💔🥺",
    "Pretty please, say yes? 🥺💖",
    "It would mean the world if you say yes! 🌍✨",
    "You can't resist, right? 💕💋",
    "Don't leave me hanging! 💞",
    "You're my only hope... 😭",
    "Come on, just say YES! 😘❤️",
    "I promise I’ll be the best Valentine ever! 😍",
    "Oh no! My heart... 😢💔",
    "You're breaking my little heart! 💔",
    "Why you gotta do me like this? 😔",
    "You know you love me! 😘",
    "Please? I'll be the best Valentine! 💖",
    "Don’t crush my dreams! 😭",
    "Please, my heart can't take it! 💓",
    "Oh no! My teddy bear is crying now... 🧸😢",
    "You can't say no to my cute face! 🥺",
    "I'll give you all the chocolates! 🍫💝",
    "You're making my heart ache... 💔",
    "Don’t make me beg! 🙏💞",
    "Please, say yes! I’ll be your best Valentine! 💘",
    "I’m waiting for your sweet 'Yes!' ❤️",
    "You know you want to! 😏💘",
    "Please don't break my heart! 💔💖",
    "Let’s make this Valentine’s Day unforgettable! 😍",
    "A little yes would mean everything to me! 💕",
    "My heart is in your hands! 💓",
    "Come on, be my Valentine and I’ll be yours forever! 💖",
    "I have so much love to give! 😘💌",
    "You are my one and only! 💕",
    "I swear I’m not that bad! 😜",
    "You make my heart skip a beat! 💓",
    "I promise I’m worth it! 🥰",
    "Please say yes and make me the happiest! 😍",
    "You can't say no to someone this cute, right? 😆",
    "I’m begging you! 😩💞",
    "If you say yes, I’ll give you my heart! 💖",
    "It’s just a little 'Yes', come on! 😘",
    "You and me, together forever! 💖",
    "Aren’t I cute enough to be your Valentine? 🧸",
    "I’m so ready to be your Valentine! 😍",
    "Say yes and I’ll give you all the love you deserve! 💝",
    "I’m so excited to spend Valentine’s Day with you! 🥳",
    "If you say yes, I’ll be the happiest person alive! ❤️",
    "I’ll cherish you forever if you say yes! 💘",
    "Let’s make some memories together! 😘",
    "My heart is all yours if you say yes! 💓",
    "You’re the one I’ve been waiting for! 💖",
    "You just have to say yes, and everything will be perfect! 💖"
];

function yesClick() {
    document.body.innerHTML = "<div class='container'><h1>hehe, I know you would say yessss Mr.Balaji sirrrr! 💖</h1><p>You made my day!</p></div>";
    document.body.style.backgroundColor = "#ffd1dc";
}

function noClick() {
    noClicks++;

    // First click will show the simple "No" message
    if (noClicks === 1) {
        noButton.innerText = "No";  // First click will show just "No"
    }
    // After the first click, show the other messages
    else {
        if (noClicks >= noMessages.length + 1) {
            noButton.innerText = noMessages[noMessages.length - 1];
        } else {
            noButton.innerText = noMessages[noClicks - 2]; // Adjust for the 1st click being "No"
        }
    }

    yesButton.style.fontSize = (1 + noClicks * 0.2) + 'em';
}
