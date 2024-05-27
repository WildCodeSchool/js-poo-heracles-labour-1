const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemeanLion = new Fighter("🦁 Nemean Lion", 11, 13);

console.log(`${heracles.name} has ${heracles.life} 💙 life points.`);
console.log(`${nemeanLion.name} has ${nemeanLion.life} 💙 life points.`);

let round = 1;
while (heracles.isAlive() && nemeanLion.isAlive()) {
  console.log(`\nRound ${round}:`);

  heracles.fight(nemeanLion);

  if (nemeanLion.isAlive()) {
    nemeanLion.fight(heracles);
  }

  round++;
}

const winner = heracles.isAlive() ? heracles : nemeanLion;
const loser = heracles.isAlive() ? nemeanLion : heracles;

console.log(`\n${winner.name} wins! 🏆`);
console.log(`${loser.name} is defeated! 💀`);
