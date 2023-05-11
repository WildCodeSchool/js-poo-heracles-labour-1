// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');
const heracles = new Fighter('🧔 Heracles', 50, 6);
const nemeanLion = new Fighter('🦁 Nemean Lion',11 , 13);



console.log(heracles.fight(nemeanLion));