class Character {
  name: string;
  health: number;
  level: number;

  constructor(name: string, health: number, level: number) {
    this.name = name;
    this.health = health;
    this.level = level;
  }

  takeDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage. Health: ${this.health}`);
  }

  attack(): void {
    console.log(`${this.name} attacks!`);
  }
}

