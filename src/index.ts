import Zoo from "./classes/Zoo";
import Giraffe from "./classes/Giraffe";
import Crocodile from "./classes/Crocodile";
import GiantTortoise from "./classes/GiantTortoise";

// Create a Zoo instance
const myZoo = new Zoo("Sunny Safari", "New York", "9 AM - 5 PM");

// Create some animals
const giraffe1 = new Giraffe("Gerald", "Male", 5.8);
const croc1 = new Crocodile("Snapper", "Female", 80);
const tortoise1 = new GiantTortoise("Shelly", "Female", 120);

// Add animals to the zoo
myZoo.addAnimal(giraffe1);
myZoo.addAnimal(croc1);
myZoo.addAnimal(tortoise1);

// List all animals
myZoo.printAnimalCount();
myZoo.printAnimalDescriptions();

// Call some methods
giraffe1.compareHeight();
croc1.favoriteFood();
tortoise1.ageCategory();

// Get admission price for today
console.log(`Admission price for today: $${myZoo.getAdmissionPrice()}`);

// Remove an animal and list all animals again
myZoo.removeAnimal("Snapper");
myZoo.printAnimalCount();
myZoo.printAnimalDescriptions();
