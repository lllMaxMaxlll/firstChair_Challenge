import Animal from "./Animal";

/**
 * Represents a Giant Tortoise, a subclass of Animal.
 * @extends Animal
 *
 * @param {string} name - The name of the giant tortoise.
 * @param {string} gender - The gender of the giant tortoise.
 * @param {number} age - The age of the giant tortoise in years.
 */

class GiantTortoise extends Animal {
	age: number;

	constructor(name: string, gender: string, age: number) {
		super("Giant Tortoise", name, 4, gender);
		this.age = age;
	}

	/**
	 * Prints the age category of the giant tortoise based on its age.
	 * @returns {void}
	 * @example
	 * const tortoise = new GiantTortoise("Tucker", "Male", 120);
	 * tortoise.ageCategory(); // Output: "Tucker is old."
	 */

	ageCategory(): void {
		if (this.age < 50) {
			console.log(`${this.name} is young.`);
		} else if (this.age <= 100) {
			console.log(`${this.name} is middle-aged.`);
		} else {
			console.log(`${this.name} is old.`);
		}
	}
}

export default GiantTortoise;
