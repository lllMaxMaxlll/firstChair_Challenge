import Zoo from "./classes/Zoo";
import Animal from "./classes/Animal";
import Giraffe from "./classes/Giraffe";
import Crocodile from "./classes/Crocodile";
import GiantTortoise from "./classes/GiantTortoise";
import * as readlineSync from "readline-sync";

// Store zoos globally
const zoos: Zoo[] = [];

// Utility to display a selection menu
function displayMenu<T>(items: T[], itemType: string, getName: (item: T) => string): number {
	console.log(`\nAvailable ${itemType}s:`);
	items.forEach((item, index) => console.log(`${index + 1}. ${getName(item)}`));
	const choice = readlineSync.questionInt(`\nSelect a ${itemType} by number (or 0 to cancel): `);
	return choice - 1;
}

function mainMenu() {
	let exit = false;

	while (!exit) {
		console.log(`
=== ZOO MANAGEMENT ===
1. Create a new Zoo
2. Add an Animal to a Zoo
3. View Animals in a Zoo
4. Remove an Animal from a Zoo
5. View Animal Descriptions in a Zoo
6. Print Animal Count in a Zoo
7. Exit
        `);

		const choice = readlineSync.questionInt("Enter your choice: ");

		switch (choice) {
			case 1:
				createZoo();
				break;
			case 2:
				addAnimalToZoo();
				break;
			case 3:
				viewAnimalsInZoo();
				break;
			case 4:
				removeAnimalFromZoo();
				break;
			case 5:
				viewAnimalDescriptions();
				break;
			case 6:
				printAnimalCount();
				break;
			case 7:
				exit = true;
				console.log("Exiting Zoo Management. Goodbye!");
				break;
			default:
				console.log("Invalid choice. Try again.");
		}
	}
}

function createZoo() {
	const name = readlineSync.question("Enter Zoo Name: ");
	const city = readlineSync.question("Enter Zoo City: ");
	const hours = readlineSync.question("Enter Zoo Operating Hours: ");
	zoos.push(new Zoo(name, city, hours));
	console.log(`Zoo "${name}" created successfully!`);
}

function addAnimalToZoo() {
	if (zoos.length === 0) {
		console.log("No zoos available. Please create a zoo first.");
		return;
	}

	const zooIndex = displayMenu(zoos, "zoo", (zoo) => zoo.name);
	if (zooIndex < 0 || zooIndex >= zoos.length) return;

	const zoo = zoos[zooIndex];

	console.log(`
=== Add Animal ===
1. Giraffe
2. Crocodile
3. Giant Tortoise
        `);

	const type = readlineSync.questionInt("Select Animal Type: ");

	let animal: Animal;

	switch (type) {
		case 1: {
			const name = readlineSync.question("Enter Giraffe Name: ");
			const gender = readlineSync.question("Enter Giraffe Gender: ");
			const height = readlineSync.questionFloat("Enter Giraffe Height: ");
			animal = new Giraffe(name, gender, height);
			break;
		}
		case 2: {
			const name = readlineSync.question("Enter Crocodile Name: ");
			const gender = readlineSync.question("Enter Crocodile Gender: ");
			const teethCount = readlineSync.questionInt("Enter Crocodile Teeth Count: ");
			const food = readlineSync.question("Enter Crocodile Favorite Food: ");
			animal = new Crocodile(name, gender, teethCount, food);
			break;
		}
		case 3: {
			const name = readlineSync.question("Enter Giant Tortoise Name: ");
			const gender = readlineSync.question("Enter Giant Tortoise Gender: ");
			const age = readlineSync.questionInt("Enter Giant Tortoise Age: ");
			animal = new GiantTortoise(name, gender, age);
			break;
		}
		default:
			console.log("Invalid animal type. Try again.");
			return;
	}

	zoo.addAnimal(animal);
}

function viewAnimalsInZoo() {
	if (zoos.length === 0) {
		console.log("No zoos available. Please create a zoo first.");
		return;
	}

	const zooIndex = displayMenu(zoos, "zoo", (zoo) => zoo.name);
	if (zooIndex < 0 || zooIndex >= zoos.length) return;

	const zoo = zoos[zooIndex];
	zoo.printAnimalDescriptions();
}

function removeAnimalFromZoo() {
	if (zoos.length === 0) {
		console.log("No zoos available. Please create a zoo first.");
		return;
	}

	const zooIndex = displayMenu(zoos, "zoo", (zoo) => zoo.name);
	if (zooIndex < 0 || zooIndex >= zoos.length) return;

	const zoo = zoos[zooIndex];
	if (zoo) {
		const animalIndex = displayMenu(zoo["animals"], "animal", (animal) => animal.name);
		if (animalIndex < 0 || animalIndex >= zoo["animals"].length) return;
		const animalName = zoo["animals"][animalIndex].name;
		zoo.removeAnimal(animalName);
	}
}

function viewAnimalDescriptions() {
	viewAnimalsInZoo(); // Reuse logic for showing animals and descriptions
}

function printAnimalCount() {
	if (zoos.length === 0) {
		console.log("No zoos available. Please create a zoo first.");
		return;
	}

	const zooIndex = displayMenu(zoos, "zoo", (zoo) => zoo.name);
	if (zooIndex < 0 || zooIndex >= zoos.length) return;

	const zoo = zoos[zooIndex];
	zoo.printAnimalCount();
}

mainMenu();
