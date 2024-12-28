/**
 * Represents a generic animal.
 *
 * @param {string} species - The species of the animal.
 * @param {string} name - The name of the animal.
 * @param {number} numberOfLegs - The number of legs the animal has.
 * @param {string} gender - The gender of the animal.
 *
 * @example
 * const giraffe = new Animal("Giraffe", "Gerald", 4);
 */

class Animal {
	species: string;
	name: string;
	numberOfLegs: number;
	gender: string;

	constructor(species: string, name: string, numberOfLegs: number, gender: string) {
		this.species = species;
		this.name = name;
		this.numberOfLegs = numberOfLegs;
		this.gender = gender;
	}

	/**
	 * Logs a description of the animal.
	 * @returns {void}
	 * @example
	 * animal.printDescription();
	 */

	printDescription(): void {
		console.log(`${this.name} is a ${this.gender} ${this.species} with ${this.numberOfLegs} legs.`);
	}
}

export default Animal;
