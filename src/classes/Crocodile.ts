import Animal from "./Animal";

/**
 * Represents a Crocodile.
 * @extends Animal
 *
 * @param {string} name - The name of the crocodile.
 * @param {string} gender - The gender of the crocodile.
 * @param {number} teethCount - The number of teeth the crocodile has.
 */

export class Crocodile extends Animal {
	teethCount: number;
	food: string;

	constructor(name: string, gender: string, teethCount: number, food: string) {
		super("Crocodile", name, 4, gender);
		this.teethCount = teethCount;
		this.food = food;
	}

	/**
	 * Logs the crocodile's favorite food.
	 * @returns {void}
	 * @example
	 * crocodile.logFavoriteFood();
	 */

	favoriteFood(): void {
		console.log(`${this.name} loves eating ${this.food}.`);
	}
}

export default Crocodile;
