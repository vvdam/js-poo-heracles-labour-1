/* Fighter class definition */
// The fighter will hit with more or less success each time, the number of points of damage that the ** attacker ** does will therefore be a random number between 1 and the strength of the fighter (use Math.random () (Documentation, and if needed some advices from this article)

// But the attacked can defend and dodge! You will therefore mitigate the damage by subtracting the damage from the dexterity of the attacked (without never going below zero)

// Once the damage is calculated, decrease the number of life points of the attacked by the value thus obtained. Be careful, the life of a fighter cannot fall below zero, also remember to check that
class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.pv = 100;
        this.strength = strength;
        this.dexterity = dexterity;
    }

    attack(nemesis) {
        let damage =
            Math.floor(Math.random() * this.strength) + 1 - nemesis.dexterity;
        if (damage > 0) {
            nemesis.pv -= damage;
            console.log(
                `${this.name} éteint ${nemesis.name} avec un coup de ${damage} points de degat`
            );
        } else {
            console.log(`${this.name} rate`);
        }
    }
    isAlive() {
        if (this.pv <= 0) {
            console.log(`${this.name} c'est fait allumer ${this.pv}`);
        } else {
            console.log(
                `${this.name} est malheuresement toujour en vie  ${this.pv} `
            );
        }
    }
}

module.exports = Fighter;
