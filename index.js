// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter');
const heracles = new Fighter('🥷  Heracles', 15, 6);
const nemeanLion = new Fighter('🦁 Nemean Lion',11 , 6);





let round = 1;
while (heracles.life > 0 || nemeanLion.life > 0) {
    console.log(`Round #${round}`);
    heracles.fight(nemeanLion);
    nemeanLion.fight(heracles);
 
        round++;
        if (heracles.life <= 0) {
            console.log(`💀 ${heracles.name} est mort`);
            console.log(`🏆 ${nemeanLion.name} a gagné ( ❤️   ${nemeanLion.life} )`);
            break;
        }   
        if (nemeanLion.life <= 0) {
            console.log(`💀 ${nemeanLion.name} est mort`);
            console.log(`🏆 ${heracles.name} a gagné ( ❤️  ${heracles.life} )`);
            break;
        }

        
    }
