import Animal from "./Animal";

/**
 * Represents a Giraffe.
 * @extends Animal
 *
 * @param {string} name - The name of the giraffe.
 * @param {string} gender - The gender of the giraffe.
 * @param {number} height - The height of the giraffe in meters.
 */

class Giraffe extends Animal {
	height: number;

	constructor(name: string, gender: string, height: number) {
		super("Giraffe", name, 4, gender);
		this.height = height;
	}

	/**
	 * Compares the giraffe's height to average heights based on gender.
	 * @returns {void}
	 * @example
	 * giraffe.compareHeight();
	 */

	compareHeight(): void {
		const averageHeight = this.gender === "Male" ? 5.5 : 4.6;
		if (this.height > averageHeight) {
			console.log(`${this.name} is taller than the average ${this.gender.toLowerCase()} giraffe.`);
		} else {
			console.log(`${this.name} is shorter than the average ${this.gender.toLowerCase()} giraffe.`);
		}
	}
}

export default Giraffe;
