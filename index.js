const Quote = require('inspirational-quotes');
const a =(Quote.getRandomQuote());
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : a,
    e : "oO",
    T : "U "
}));

// or cowsay.think()