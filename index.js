// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");
const fighters = [
    new Fighter("🤺Heracles", 20, 6),
    new Fighter("🦁Nemean Lion", 11, 13),
];

let attacker = fighters[0];
let defender = fighters[1];

while (attacker.pv > 0 && defender.pv > 0) {
    attacker.attack(defender);
    [attacker, defender] = [defender, attacker];
}

console.log(
    `${attacker.pv > 0 ? attacker.name : defender.name} a gagné la bagarre !`
);

attacker.isAlive();

defender.isAlive();
