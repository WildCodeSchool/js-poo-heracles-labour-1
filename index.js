import {Fighter } from "./src/Fighter.js";

// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const heracles = new Fighter("🧔 Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);
let round = 1;
while(heracles.life >= 0 || lion.life >= 0) {
    console.log(`Round: ${round}`);
    heracles.fight(lion);
    console.log(`${heracles.name}   🗡️    ${lion.name}. ❤️   of ${lion.name}: ${lion.life}`)
    lion.fight(heracles);
    console.log(`${lion.name}   🐾    ${heracles.name}. ❤️   of ${heracles.name}: ${heracles.life}`)
    round ++;
}