import Animal from "./Animal";

/**
 * Represents a Zoo that contains a collection of animals.
 * @param {string} name - The name of the zoo.
 * @param {string} city - The city where the zoo is located.
 * @param {string} operatingHours - The operating hours of the zoo.
 * @property {Animal[]} animals - A private list of animals in the zoo.
 * This array contains all the animals currently in the zoo.
 * (This property is private and cannot be accessed directly.)
 */

class Zoo {
	name: string;
	city: string;
	operatingHours: string;
	private animals: Animal[] = [];

	constructor(name: string, city: string, operatingHours: string) {
		this.name = name;
		this.city = city;
		this.operatingHours = operatingHours;
	}

	/**
	 * Adds an animal to the zoo.
	 * @param {Animal} animal - The animal to add.
	 * @returns {void}
	 * @example
	 * const giraffe = new Animal("Giraffe", "Gerald", 4, "Male");
	 * zoo.addAnimal(giraffe);
	 */

	addAnimal(animal: Animal): void {
		this.animals.push(animal);
		console.log(`${animal.name} the ${animal.species} has been added to the zoo.`);
	}

	/**
	 * Removes an animal from the zoo by name.
	 * @param {string} animalName - The name of the animal to remove.
	 * @returns {void}
	 * @example
	 * zoo.removeAnimal("Gerald");
	 */

	removeAnimal(animalName: string): void {
		this.animals = this.animals.filter((animal) => animal.name !== animalName);
		console.log(`${animalName} has been removed from the zoo.`);
	}

	/**
	 * Prints the current number of animals in the zoo.
	 * @returns {void}
	 * @example
	 * zoo.printAnimalCount();
	 */

	printAnimalCount(): void {
		console.log(`There are ${this.animals.length} animals in the zoo.`);
	}

	/**
	 * Prints descriptions of all animals currently in the zoo.
	 * @returns {void}
	 * @example
	 * zoo.printAnimalDescriptions();
	 */

	printAnimalDescriptions(): void {
		console.log("Animals currently in the zoo:");
		this.animals.forEach((animal) => animal.printDescription());
	}

	/**
	 * Gets the admission price for current day.
	 * @example
	 * const todayPrice = zoo.getAdmissionPrice();
	 * console.log(`Admission price for today: ${todayPrice}`);
	 */

	getAdmissionPrice(): number {
		const today = new Date().getDay(); // 0: Sunday, 1: Monday, ... 6: Saturday
		switch (today) {
			case 1: // Monday
			case 2: // Tuesday
			case 4: // Thursday
			case 5: // Friday
				return 19.99;
			case 3: // Wednesday
				return 9.99;
			case 0: // Sunday
			case 6: // Saturday
				return 25.99;
			default:
				return 0;
		}
	}
}

export default Zoo;
